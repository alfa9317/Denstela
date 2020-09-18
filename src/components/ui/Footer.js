import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import footerAdornment from '../../assets/images/constLogo2.png';
const phoneNumber = '(352) 125 0143';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.primary,
        width: "100%",
        zIndex: 1302,
        position: "relative",
        height: "22rem",
        [theme.breakpoints.down('md')]:{
            height: "15.5rem"
        },
        [theme.breakpoints.down('sm')]:{
            height: "22rem"
        },
        [theme.breakpoints.down('xs')]:{
            height: "25rem"
        }
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('md')]:{
            width: "19em"
        },
        [theme.breakpoints.down('xs')]:{
            width: "14em"
        }
    },
    phoneNumberContainer: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0px'
    },
    phoneNumberText: {
        color: 'white',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1.5rem",
        fontWeight: "bold",
        '&:hover':{
            color: '#a2d5f2',
        },
        [theme.breakpoints.down('md')]:{
            fontSize: "1.3rem"
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: "1.1rem"
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: "1rem"
        }
    },
    linksContainer: {

    },
    link: {
        color: 'white',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.75rem",
        fontWeight: "bold"
    },
    menuGridItem: {
        margin: '2em 4em 1em 0em'
    }
}))

export default function Footer(){
    const classes = useStyles();

    return  <footer className={classes.footer}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6}> 
                        <img alt="logo" src={footerAdornment} className={classes.adornment}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}> 
                        <Button color="primary" className={classes.phoneNumberContainer}><h2 className={classes.phoneNumberText}>{phoneNumber}</h2></Button>
                    </Grid>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="center">
                     <Grid item md={12} lg={7}>
                         <Grid container justify="center" className={classes.linksContainer}>
                             <Grid item className={classes.menuGridItem}>
                                 <Grid container direction="column" spacing={1}>
                                    <Grid item className={classes.link}>
                                        Inicio
                                    </Grid>
                                 </Grid>
                             </Grid>
                             <Grid item className={classes.menuGridItem}>
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
                             <Grid item className={classes.menuGridItem}>
                                 <Grid container direction="column" spacing={1}>
                                    <Grid item className={classes.link}>
                                        Sobre nosotros
                                    </Grid>
                                    <Grid item className={classes.link}>
                                        Visión
                                    </Grid>
                                    <Grid item className={classes.link}>
                                        Tecnología
                                    </Grid>
                                    <Grid item className={classes.link}>
                                        Procesos
                                    </Grid>
                                    <Grid item className={classes.link}>
                                        Instalaciones
                                    </Grid>
                                 </Grid>
                             </Grid>
                             <Grid item className={classes.menuGridItem}>
                                 <Grid container direction="column" spacing={1}>
                                    <Grid item className={classes.link}>
                                        Casos de éxito
                                    </Grid>
                                 </Grid>
                             </Grid>
                             <Grid item className={classes.menuGridItem}>
                                 <Grid container direction="column" spacing={1}>
                                    <Grid item className={classes.link}>
                                        Contáctanos
                                    </Grid>
                                 </Grid>
                             </Grid>
                         </Grid>
                     </Grid>
                     <Grid item justify="center" md={0} lg={2}>
                         Botones
                     </Grid>
                </Grid>
            </footer>
}