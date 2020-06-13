import { createMuiTheme } from '@material-ui/core/styles';

const jBlue = '#039CE5';
const jDarkBlue = '#183A67';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${jBlue}`,
            darkBlue: `${jDarkBlue}`
        },
        primary: {
            main: `${jBlue}`
        },
        secondary: {
            main: `${jDarkBlue}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Mukta',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1.3rem'
        }
    }
});