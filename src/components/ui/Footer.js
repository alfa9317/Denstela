import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import footerAdornment from '../../assets/images/constLogo2.png'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.primary,
        width: "100%",
        zIndex: 1302,
        position: "relative",
        height: "5.5em",
        [theme.breakpoints.down('md')]:{
            height: "17em"
        },
        [theme.breakpoints.down('xs')]:{
            height: "25em"
        }
    },
    adornment: {
        width: "20em",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]:{
            width: "17em"
        },
        [theme.breakpoints.down('xs')]:{
            textAlign: "center",
            width: "14em"
        }
    }
}))

export default function Footer(){
    const classes = useStyles();

    return  <footer className={classes.footer}>
                <img alt="logo" src={footerAdornment} className={classes.adornment}/> 
            </footer>
}