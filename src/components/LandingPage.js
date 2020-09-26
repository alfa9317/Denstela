import React, { useState, useRef, Fragment } from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowButton from "../components/ui/ArrowButton";
import Typography from "@material-ui/core/Typography";
import { Row, Col, Carousel } from 'antd';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
// import {Animated} from "react-animated-css";


import consultorio from "../assets/images/consultorio.jpeg"
import dentista from "../assets/images/dentista1.jpg"

const useStyles = makeStyles(theme => ({
    imagen: {
        maxWidth: "100em",
        minWidth: "21em",
        marginLeft: "0%"
    },
    contactButton: {
        fontSize: '1rem',
        textTransform: 'none',
        color: 'white',
         fontFamily: "'Montserrat', sans-serif",
         backgroundColor: theme.palette.common.primary,
         borderRadius: 15,
         height: 45,
         width: 145,
         marginRight: 20,
         transition: 'all 0.4s ease 0s',
         [theme.breakpoints.down('md')]:{
            fontSize: '0.9rem',
            height: 40,
            width: 140,
            marginRight: 18,
         },
        [theme.breakpoints.down('sm')]:{
            fontSize: '1rem',
            height: 43,
            width: 145,
            marginRight: 0,
            marginBottom: 15
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '1.2rem',
            height: 46,
            width: 175,
            marginRight: 0,
            marginTop: 15,
        },
        '&:hover':{
            color: theme.palette.common.primary,
            background: '#a2d5f2',
            borderColor: '#f6b93b !important',
            transition: 'all 0.2s ease 0s'
        },
        '@media (hover: none)': {
            '&:hover':{
                color: 'white',
                background: theme.palette.common.primary
            } 
        }
        
    },
    buttonContainer: {
        marginTop: '1em'
    },
    learnButtonHero:{
        borderColor: theme.palette.common.primary,
        color: theme.palette.common.primary,
        borderWidth: 2,
        textTransform: "none",
        borderRadius: 50,
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "bold",
        fontSize: "0.9rem",
        height: 45,
        width: "auto",
         [theme.breakpoints.down('md')]:{
            fontSize: '0.8rem',
            height: 40,
         },
        [theme.breakpoints.down('sm')]:{
            fontSize: '0.9rem',
            height: 40,
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '1rem',
            height: 38,
        }
    },
    mainContainer: {
       [theme.breakpoints.down("sm")]:{
           marginTop: "1em"
       }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        [theme.breakpoints.down('sm')]:{
            marginTop: "2rem",
            marginBottom: "3rem"
        }   
    },
    heroText: {
        [theme.breakpoints.down('md')]:{
            fontSize: '2.2rem'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '2.5rem'
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '1.4rem'
        }
    },
    contentStyle: {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79'
    },
    slideContainer: {
        position: 'relative',
        width: '100%'
    },
    slideText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
     }
}));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const slider = useRef(null);

    const [isOnL, setIsOnL] = useState(false);
    const [isOnR, setIsOnR] = useState(false);

    const carouselButtonL = {
        height: '100%',
        transition: 'all 0.4s ease 0s',
        width: isOnL ? '8.5vw' : '2.5vw',
        backgroundColor: isOnL ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
    }
    const carouselButtonR = {
        height: '100%',
        transition: 'all 0.4s ease 0s',
        width: isOnR ? '8.5vw' : '2.5vw',
        backgroundColor: isOnR ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
    }
    const iconCarouselL = {
        transition: 'all 0.4s ease 0s',
        fontSize: isOnL ? '4rem' : '3rem',
        fontWeight: isOnL ? 600 : 400,
        opacity: isOnL ? 1 : 0.2
    }
    const iconCarouselR = {
        transition: 'all 0.4s ease 0s',
        fontSize: isOnR ? '4rem' : '3rem',
        fontWeight: isOnR ? 600 : 400,
        opacity: isOnR ? 1 : 0.2
    }


    return(
        <React.Fragment>
            <Fragment>
                <div className={classes.slideContainer}>
                    <Carousel autoplay ref={slider}>
                        <div>
                            <img src={dentista} alt="imagen consultorio" style={{display: 'block', width:'100%'}}/>
                            {/* <h1 className={classes.slideText} style={{top:'33%',left:'60%',color: 'black', fontSize:'4vw'}}>{"¡Hola!"}</h1> 
                            <h3 className={classes.slideText} style={{top:'60%',left:'70%',color: 'black', fontSize:'3vw'}}>{"Bienvenido a tu fondita"}</h3>  */}
                            
                        </div>
                        <div >
                            <img src={dentista} alt="imagen consultorio" style={{display: 'block', width:'100%'}}/>
                            {/* <h2 className={classes.slideText} style={{left:'45%'}}>Recibe tu comida en recipientes biodegradables</h2>  */}
                        </div>
                        <div >
                            <img src={dentista} alt="imagen consultorio" style={{display: 'block', width:'100%'}}/>
                            {/* <h1 className={classes.slideText} style={{left:'60%'}}>Comida que te consiente</h1> */}
                        </div>
                    </Carousel>
                    <Row justify="space-between" className={classes.overlay} >
                        <Col onMouseEnter={() => setIsOnL(true)} onMouseLeave={() => setIsOnL(false)}>
                            <Button style={carouselButtonL} onClick={() => slider.current.prev()}><ArrowBackIosRoundedIcon style={iconCarouselL}/></Button>
                        </Col>
                        <Col onMouseEnter={() => setIsOnR(true)} onMouseLeave={() => setIsOnR(false)}>
                            <Button style={carouselButtonR} onClick={() => slider.current.next()}><ArrowForwardIosRoundedIcon style={iconCarouselR}/></Button>
                        </Col>
                    </Row>
                </div>
            </Fragment>
            
            
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item>
                    
                </Grid>
                {/* <Grid item>
                    <img src={dentista} alt="imagen consultorio" style={{width:'100%', marginBottom:'18rem'}}/>
                </Grid> */}
                <Grid item>
                    <Grid container justify="center" alignItems="center" direction= {matchesSM ? "column" : "row"}>
                        <Grid sm item className={classes.heroTextContainer}>
                            <Typography align="center" variant="h2" className={classes.heroText}>
                                Cuidamos de tus dientes,
                                <br />
                                Como cuidas de los tuyos
                            </Typography>
                            <Grid container justify="center" alignItems="center" direction= {matchesSM ? "column" : "row"} className={classes.buttonContainer}>
                                <Grid item>
                                    <Button variant="contained" className={classes.contactButton}>Contáctanos</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButtonHero}>
                                        <span style={{marginRight: 10}}>Conoce más sobre nosotros</span>
                                        <ArrowButton width={15} height={15} fill={theme.palette.common.primary} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm item className={classes.imagen}>
                            <img src={consultorio} alt="imagen consultorio" style={{width:'100%'}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );

}