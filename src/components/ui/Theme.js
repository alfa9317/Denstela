import { createMuiTheme } from '@material-ui/core/styles';

const dPrimary = '#313131';
const dSecondary = '#000000';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${dPrimary}`,
            darkBlue: `${dPrimary}`
        },
        primary: {
            main: `${dPrimary}`
        },
        secondary: {
            main: `${dSecondary}`
        }
    },
    typography: {
        tab: {
            fontFamily: "'Montserrat', sans-serif",
            textTransform: 'none',
            fontWeight: 400,
            fontSize: '1.2rem'
        },
        estimate: {
            fontFamily: "'Pacifico', cursive;",
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        }
    }
});