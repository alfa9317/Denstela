import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowButton from "../components/ui/ArrowButton";
import Typography from "@material-ui/core/Typography";
import { Carousel } from 'antd';
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
            marginRight: 20,
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '0.9rem',
            height: 40,
            width: 135,
            marginRight: 10,
        },
        '&:hover':{
            color: theme.palette.common.primary,
            background: '#a2d5f2',
            borderColor: '#f6b93b !important',
            transition: 'all 0.2s ease 0s'
        },
        
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
            fontSize: '0.8rem',
            height: 39,
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
            fontSize: '2rem'
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
        textAlign: 'center'
    },
    slideText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <React.Fragment>
            <Carousel autoplay>
                <div className={classes.slideContainer}>
                    <img src={dentista} alt="imagen consultorio" style={{width:'100%'}}/>
                    {/* <h1 className={classes.slideText} style={{top:'33%',left:'60%',color: 'black', fontSize:'4vw'}}>{"¡Hola!"}</h1> 
                    <h3 className={classes.slideText} style={{top:'60%',left:'70%',color: 'black', fontSize:'3vw'}}>{"Bienvenido a tu fondita"}</h3>  */}
                </div>
                <div className="slideContainer">
                    <img src={dentista} alt="imagen consultorio" style={{width:'100%'}}/>
                    {/* <h2 className={classes.slideText} style={{left:'45%'}}>Recibe tu comida en recipientes biodegradables</h2>  */}
                </div>
                <div className="slideContainer">
                    <img src={dentista} alt="imagen consultorio" style={{width:'100%'}}/>
                    {/* <h1 className={classes.slideText} style={{left:'60%'}}>Comida que te consiente</h1> */}
                </div>
            </Carousel>
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
                            <Grid container justify="center" className={classes.buttonContainer}>
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