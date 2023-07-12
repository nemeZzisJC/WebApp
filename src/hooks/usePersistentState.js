import { useState, useEffect } from 'react';

const usePersistentState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    // Check if there is a value saved in localStorage for the given key
    const persistedState = localStorage.getItem(key);
    if (persistedState === 'undefined') {
        console.log("There is no persistedState", persistedState);
    } else {
        console.log("There is persisted state", JSON.parse(persistedState));
    }
    return persistedState !== 'undefined' ? JSON.parse(persistedState) : initialValue;
  });

  useEffect(() => {
    // Save the state value to localStorage whenever it changes
    console.log("UPDATING");
    localStorage.setItem(key, JSON.stringify(state));
    console.log("Show state", state);
  }, [key, state]);

  return [state, setState];
};

export {usePersistentState};