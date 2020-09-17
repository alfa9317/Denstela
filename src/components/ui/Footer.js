import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import footerAdornment from '../../assets/images/constLogo2.png'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.primary,
        width: "100%",
        zIndex: 1302,
        position: "relative",
        height: "10rem",
        // [theme.breakpoints.down('md')]:{
        //     height: "17em"
        // },
        // [theme.breakpoints.down('xs')]:{
        //     height: "25em"
        // }
    },
    adornment: {
        width: "20em",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]:{
            width: "17em"
        },
        [theme.breakpoints.down('xs')]:{
            width: "14em"
        }
    },
    linksContainer: {

    },
    link: {
        color: 'white',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.75rem",
        fontWeight: "bold"
    }
}))

export default function Footer(){
    const classes = useStyles();

    return  <footer className={classes.footer}>
                <Grid container spacing={40}>
                     <Grid item xs={12} sm={4}> 
                        <img alt="logo" src={footerAdornment} className={classes.adornment}/>
                     </Grid>
                     <Grid item xs={12} sm={4}>
                         <Grid container justify="center" className={classes.linksContainer} spacing={3}>
                             <Grid item>
                                 <Grid container direction="column" spacing={1}>
                                    <Grid item className={classes.link}>
                                        Inicio
                                    </Grid>
                                 </Grid>
                             </Grid>
                             <Grid item>
                                 <Grid container direction="column" spacing={1}>
                                    <Grid item className={classes.link}>
                                        Servicios
                                    </Grid>
                                    <Grid item className={classes.link}>
                                        Servicio 1
                                    </Grid>
                                    <Grid item className={classes.link}>
                                        Servicio 2
                                    </Grid>
                                    <Grid item className={classes.link}>
                                        Servicio 3
                                    </Grid>
                                 </Grid>
                             </Grid>
                             <Grid item>
                                 <Grid container direction="column" spacing={1}>
                                    <Grid item className={classes.link}>
                                        Sobre nosotros
                                    </Grid>
                                 </Grid>
                             </Grid>
                             <Grid item>
                                 <Grid container direction="column" spacing={1}>
                                    <Grid item className={classes.link}>
                                        Casos de éxito
                                    </Grid>
                                 </Grid>
                             </Grid>
                             <Grid item>
                                 <Grid container direction="column" spacing={1}>
                                    <Grid item className={classes.link}>
                                        Contáctanos
                                    </Grid>
                                 </Grid>
                             </Grid>
                         </Grid>
                     </Grid>
                     <Grid item justify="center" xs={12} sm={4}>
                         Botones
                     </Grid>
                </Grid> 
            </footer>
}