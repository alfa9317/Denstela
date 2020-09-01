import React from "react";
import {makeStyles} from '@material-ui/styles';
import {Animated} from "react-animated-css";
import constLogo from '../../assets/images/constLogo2.png'

const useStyles = makeStyles(theme => ({
    main: {
       textAlign: 'center',
       backgroundColor: '#141414',
       color: 'white',
       fontFamily: "'Montserrat', sans-serif",
       fontSize: '1.5vw',
       [theme.breakpoints.down('sm')]: {
        fontSize: '3vw'
        //Page setup
        }
    },
    pad: {
        textAlign: 'center',
        backgroundColor: '#141414',
        height: '500px'
    }
}))

export default function InConstruction(props){

        const classes = useStyles();
        return (
            
            <React.Fragment>
                <div className={classes.main}>
                    {/* <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} isVisible={true}>
                        <div>
                            <h2 className='homePageTitle' style={{fontSize:'3vw', fontFamily: 'Mukta'}}>¡Bienvenidos!</h2>
                            <br/>
                        </div>
                    </Animated> */}
                    
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={0.6} animationInDuration={3000} isVisible={true}>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <img alt="profilePic" src={constLogo} style={{width: '50vw',height: 'auto'}}/>
                        <br/>
                        <br/>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={3.6} animationInDuration={4000} isVisible={true}>
                        <p>El sitio está temporalmente en construcción, disculpe las molestias</p>
                    </Animated>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay={3.7} animationInDuration={4000} isVisible={true}>
                        <p style={{margin:'0px 15vw 0px 15vw'}}>Teléfono: (352) 125 0143; Correo electrónico: denstela.contacto@gmail.com</p>
                    </Animated>
                
                    <div className='homePageTitle' style={{fontSize:'100px'}}>...</div>
                </div>
                <div className={classes.pad}/>
            </React.Fragment>
            
          );
  }
