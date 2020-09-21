import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';


import footerAdornment from '../../assets/images/constLogo2.png';
const phoneNumber = '(352) 125 0143';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.primary,
        width: "100%",
        zIndex: 1302,
        position: "relative",
        height: "24rem",
        [theme.breakpoints.down('md')]:{
            height: "25rem"
        },
        [theme.breakpoints.down('sm')]:{
            height: "30rem"
        },
        [theme.breakpoints.down('xs')]:{
            height: "60rem"
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
    linksContainer:{
       marginLeft:'5%'
    },
    mainLink: {
        color: '#e3e3e3',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1.1rem",
        fontWeight: 400,
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]:{
            fontSize: "1.8rem",
            margin: "1rem 0rem 1rem 0rem"
        }
    },
    link: {
        color: '#fafafa',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 200,
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]:{
            fontSize: "0.8rem"
        }
    },
    menuGridItem: {
        margin: '2em 0em 2em 0em',
        textAlign:"center",
        [theme.breakpoints.down('sm')]:{
            margin: '2em 0em 0em 0em'
        }
    }
}))

export default function Footer(props){
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return  <footer className={classes.footer}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} component={Link} to='/' disableRipple onClick={()=>props.setValue(0)}> 
                        <img alt="logo" src={footerAdornment} className={classes.adornment}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}> 
                        <Button color="primary" className={classes.phoneNumberContainer}><h2 className={classes.phoneNumberText}>{phoneNumber}</h2></Button>
                    </Grid>
                </Grid>
                <Hidden xsDown>
                    <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.linksContainer}>
                        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.menuGridItem}>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Grid item component={Link} to="/servicios" className={classes.mainLink} onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}} style={{marginRight: "6rem"}}>
                                    Servicios
                                </Grid>
                                    <Grid item>
                                        <Grid container justify="center" alignItems={matches ? "center" : "flex-start"} spacing={1}>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio1" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}>
                                                Estética dental
                                            </Grid>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio2" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}>
                                                Ortodoncia
                                            </Grid>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                                                Endodoncia
                                            </Grid>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                                                Implantes
                                            </Grid>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                                                Prótesis
                                            </Grid>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio1" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}>
                                                Periodoncia
                                            </Grid>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio2" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}>
                                                Odontopediatría
                                            </Grid>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                                                Ortopedia maxilar
                                            </Grid>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                                                Cirugía bucodental
                                            </Grid>
                                            <Grid container item sm={6} md={6} lg={6} component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                                                Rehabilitación dental
                                            </Grid>
                                        </Grid>
                                    </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} lg={2} className={classes.menuGridItem}>
                            <Grid container direction="column" justify="center" alignItems={matches ? "center" : "flex-start"} spacing={2}>
                            <Grid item component={Link} to="/sobrenosotros" className={classes.mainLink} onClick={()=>props.setValue(2)}>
                                Sobre nosotros
                            </Grid>
                            <Grid item>
                                <Grid container direction="column" justify="center" alignItems={matches ? "center" : "flex-start"} spacing={1}>
                                    <Grid item component={Link} to="/sobrenosotros" className={classes.link} onClick={()=>props.setValue(2)}>
                                        Visión
                                    </Grid>
                                    <Grid item component={Link} to="/sobrenosotros" className={classes.link} onClick={()=>props.setValue(2)}>
                                        Tecnología
                                    </Grid>
                                    <Grid item component={Link} to="/sobrenosotros" className={classes.link} onClick={()=>props.setValue(2)}>
                                        Procesos
                                    </Grid>
                                    <Grid item component={Link} to="/sobrenosotros" className={classes.link} onClick={()=>props.setValue(2)}>
                                        Instalaciones
                                    </Grid>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} lg={2} className={classes.menuGridItem}>
                            <Grid container direction="column" justify="center" alignItems={matches ? "center" : "flex-start"} spacing={1}>
                                <Grid item component={Link} to="/casos" className={classes.mainLink} onClick={()=>props.setValue(3)} style={{marginRight: matches ? "6rem": "0rem"}}>
                                    Casos de éxito
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} lg={2} className={classes.menuGridItem}>
                            <Grid container direction="column" justify="center" alignItems={matches ? "center" : "flex-start"} spacing={1}>
                            <Grid item component={Link} to="/contacto" className={classes.mainLink} onClick={()=>props.setValue(4)}>
                                Contáctanos
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                        <Grid item component={Link} to="/servicios" className={classes.mainLink} onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}}>
                            Servicios
                        </Grid>
                        <Grid item component={Link} to="/servicio1" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}>
                            Estética dental
                        </Grid>
                        <Grid item component={Link} to="/servicio2" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}>
                            Ortodoncia
                        </Grid>
                        <Grid item component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                            Endodoncia
                        </Grid>
                        <Grid item component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                            Implantes
                        </Grid>
                        <Grid item component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                            Prótesis
                        </Grid>
                        <Grid item component={Link} to="/servicio1" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}>
                            Periodoncia
                        </Grid>
                        <Grid item component={Link} to="/servicio2" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}>
                            Odontopediatría
                        </Grid>
                        <Grid item component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                            Ortopedia maxilar
                        </Grid>
                        <Grid item component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                            Cirugía bucodental
                        </Grid>
                        <Grid item component={Link} to="/servicio3" className={classes.link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                            Rehabilitación dental
                        </Grid>
                        <Grid item component={Link} to="/sobrenosotros" className={classes.mainLink} onClick={()=>props.setValue(2)}>
                            Sobre nosotros
                        </Grid>
                        <Grid item component={Link} to="/sobrenosotros" className={classes.link} onClick={()=>props.setValue(2)}>
                            Visión
                        </Grid>
                        <Grid item component={Link} to="/sobrenosotros" className={classes.link} onClick={()=>props.setValue(2)}>
                            Tecnología
                        </Grid>
                        <Grid item component={Link} to="/sobrenosotros" className={classes.link} onClick={()=>props.setValue(2)}>
                            Procesos
                        </Grid>
                        <Grid item component={Link} to="/sobrenosotros" className={classes.link} onClick={()=>props.setValue(2)}>
                            Instalaciones
                        </Grid>
                        <Grid item component={Link} to="/casos" className={classes.mainLink} onClick={()=>props.setValue(3)}>
                            Casos de éxito
                        </Grid>
                        <Grid item component={Link} to="/contacto" className={classes.mainLink} onClick={()=>props.setValue(4)}>
                            Contáctanos
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                            Botones
                    </Grid>
                </Grid>
            </footer>
}