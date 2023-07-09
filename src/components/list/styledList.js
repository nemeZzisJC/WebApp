import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

const StyledList = styled(List)(() => ({
    width: '40%',
    boxShadow: '4px 4px #C7C9CC',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '10px',
    marginTop: '5vh',
}));

export default StyledList;