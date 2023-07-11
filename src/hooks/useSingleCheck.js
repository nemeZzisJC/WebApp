function useSingleCheck(userAnswer, possibleAnswers) {
    console.log("UseSingleCheck", possibleAnswers);
    for (let i = 0; i < possibleAnswers.length; ++i) {
        if (userAnswer === possibleAnswers[i]) {
            return 1;
        }
    }
    return 0;
}

export {useSingleCheck};