import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';

const StyledListItemButton = styled(ListItemButton)(() => ({
    height: "50px",
    position: 'relative',
    borderRadius: '5px',
    '&:hover': {
        color: "rgb(1, 161, 108)",
        backgroundColor: '#F3F5F8',
        borderBottom: '3px solid rgb(1, 161, 108)',
        borderRight: '3px solid rgb(1, 161, 108)',
        borderTop: '0.5px solid black',
        borderLeft: '0.5px solid black'
    },
}));

export default StyledListItemButton;