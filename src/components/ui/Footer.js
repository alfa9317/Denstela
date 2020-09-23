import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';

import footerAdornment from '../../assets/images/constLogo2.png';


const phoneNumber = '(352) 125 0143';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.primary,
        width: "100%",
        zIndex: 1302,
        position: "relative",
        height: "38rem",
        [theme.breakpoints.down('md')]:{
            height: "35rem"
        },
        [theme.breakpoints.down('sm')]:{
            height: "40rem"
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
        marginTop: '20px',
        [theme.breakpoints.down('md')]:{
            width: "19em"
        },
        [theme.breakpoints.down('xs')]:{
            width: "14em"
        }
    },
    phoneNumberContainer: {
        // display: 'block',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        marginTop: '38px',
        textDecoration: 'none',
        color: 'white',
        '&:hover':{
            color: '#a2d5f2',
        },
        [theme.breakpoints.down('md')]:{
            marginTop: '32px',
        },
        [theme.breakpoints.down('sm')]:{
            marginTop: '5px',
            marginBottom: '10px'
        },
        [theme.breakpoints.down('xs')]:{
            marginTop: '10px'
        }
    },
    phoneNumberText: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1.5rem",
        fontWeight: "bold",
        [theme.breakpoints.down('md')]:{
            fontSize: "1.3rem"
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: "1.2rem"
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: "1.2rem"
        }
    },
    phoneNumberIcon: {
        fontSize: "1.5rem",
        marginTop:'0.5rem',
        marginRight: '1px',
        [theme.breakpoints.down('md')]:{
            fontSize: "1.3rem",
            marginTop:'0.4rem'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: "1.2rem",
            marginTop:'0.3rem'
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: "1.2rem",
            marginTop:'0.4rem'
        }
    },
    linksContainer:{
        marginLeft:'5%',
        [theme.breakpoints.down('xs')]:{
        marginLeft:'0%',
        }
    },
    mainLink: {
        color: '#e3e3e3',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1.1rem",
        fontWeight: 400,
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]:{
            fontSize: "1.4rem",
            margin: "0rem",
        }
    },
    link: {
        color: '#f4f3f3',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 200,
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]:{
            fontSize: "0.8rem",
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '0px'
        }
    },
    menuGridItem: {
        margin: '2em 0em 2em 0em',
        textAlign:"center",
        [theme.breakpoints.down('sm')]:{
            margin: '1em 0em 1em 0em'
        }
    },
    line: {
        // width:'50%',
        // textAlign:'center',
        // marginLeft:'auto',
        // border: "1px solid #141414"
        width: '30%',
        border: 0,
        height: '1.7px',
        [theme.breakpoints.down('sm')]:{
            width: '33%'
        },
        [theme.breakpoints.down('xs')]:{
            width: '10%',
            margin: '0px'
        }    
    },
    icon:{
        fontSize: '2em',
        color: "#e3e3e3",
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.8em'
        },
        '&:hover':{
            color: '#a2d5f2'
        }
    }

}))

export default function Footer(props){
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matches2 = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
    const matches3 = useMediaQuery(theme.breakpoints.between('sm', 'sm'));

    return  <footer className={classes.footer}>
        
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} component={Link} to='/' disableRipple onClick={()=>props.setValue(0)}> 
                        <img alt="logo" src={footerAdornment} className={classes.adornment}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} component={'a'} href='tel:3521250143' id="phone-link" rel='noopener noreferrer' target='_blank' className={classes.phoneNumberContainer}> 
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item>
                                <PhoneIcon className={classes.phoneNumberIcon}/>
                            </Grid>
                            <Grid item>
                                <h2 className={classes.phoneNumberText}>{phoneNumber}</h2>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box style={{overflow: 'auto'}}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" className={classes.linksContainer}>
                        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.menuGridItem}>
                            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                                <Grid item component={Link} to="/servicios" className={classes.mainLink} onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}} style={{marginRight: matches2 ? "7rem": "0rem"}}>
                                    Servicios
                                </Grid>
                                    <Grid item>
                                        <Grid container style={{textAlign: matches ? 'center' : 'left'}} spacing={1}>
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
                                <Grid item component={Link} to="/casos" className={classes.mainLink} onClick={()=>props.setValue(3)} style={{marginRight: matches3 ? "6rem": "0rem"}}>
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
                </Box>
                <Grid container direction="row" justify="center" alignItems="center" style={{margin:'40px 0px 10px 0px'}}>
                    <Grid item xs={3} sm={4} md={4} lg={4} className={classes.line} style={{backgroundImage: 'linear-gradient(90deg, transparent, #e3e3e3)'}}/>
                    <Grid item xs={5} sm={3} md={2} lg={2}>
                        <Grid container justify="center" align="center" spacing={3}>
                            <Grid item component={'a'} href={"https://www.facebook.com/Denstela"} target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className={classes.icon}/>
                            </Grid>
                            <Grid item component={'a'} href={"https://www.instagram.com/den.stela/"} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className={classes.icon}/>
                            </Grid>
                            <Grid item>
                                <TwitterIcon className={classes.icon}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} sm={4} md={4} lg={4} className={classes.line} style={{backgroundImage: 'linear-gradient(90deg, #e3e3e3, transparent)'}}/>
                </Grid>
                
            </footer>
}