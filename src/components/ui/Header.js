import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles"

import logo from '../../assets/images/constLogo2.png';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 20 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '0.6em'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.1em'
        }
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: '5em'
        },
        [theme.breakpoints.down('xs')]: {
            height: '4.5em'
        }
    }
}))

export default function Header(props){
    const classes = useStyles()

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" >
                    <Toolbar disableGutters>
                        <img alt='Company logo' className={classes.logo} src={logo} />
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}