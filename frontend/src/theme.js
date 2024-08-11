import { createTheme } from '@mui/material/styles';
import {   purple } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: purple[400],
            
        },
        secondary: {
            main:purple[500],
            midpurple:"#ce93d8"
        }
    }
});