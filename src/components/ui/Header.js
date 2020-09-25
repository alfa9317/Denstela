import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab  from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/images/constLogo2.png';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 20 : 0,
        color: trigger ? "secondary": "primary"
        // style: {backgroundColor: trigger ?  "#141414" : "#313131"}
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '4em',
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
    },
    logoContainer: {
        padding: '0',
        '&:hover': {
            backgroundColor: 'transparent'
        },
        margin: '8px 10px 8px 30px',
        [theme.breakpoints.down('md')]: {
            margin: '2px 0px 3px 0px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
        color: '#FFFFFF',
        [theme.breakpoints.up('xl')]: {
            fontSize: '1.1rem'
        }
    },
    button: {
        ...theme.typography.contact,
        borderRadius: '50px',
        marginLeft: '40px',
        marginRight: '35px',
        height: '55px',
        color: 'black',
        transition: 'all 0.4s ease 0s',
        '&:hover':{
            color: '#ffffff !important',
            background: '#a2d5f2',
            borderColor: '#f6b93b !important',
            transition: 'all 0.2s ease 0s'
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '1.1rem'
        }
    },
    menu: {
        backgroundColor: theme.palette.common.primary,
        color: 'white',
        borderRadius: '0px'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover':{
            opacity: 1
        }
    },
    drawerIcon: {
        height:'50px',
        width:'50px'
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        '&:hover':{
            backgroundColor: 'transparent'
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.primary
    },
    drawerItem: {
        ...theme.typography.tab,
        color: '#FFFFFF',
        opacity: 0.7
    },
    drawerItemSchedule: {
        ...theme.typography.tab,
        color: 'black',
        opacity: 0.7,
        backgroundColor: "#fcfcfc"
    },
    drawerItemSelected: {
        '& .MuiListItemText-root': {
            opacity: 1
        }
        
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}))

export default function Header(props){
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl,setAnchorEl] = useState(null);
    const [openMenu,setOpenMenu] = useState(false);

    const handleChange = (e, newValue) => {
        props.setValue(newValue)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleMenuItemClick = (e,i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const menuOptions = [{name: 'Servicios', link: '/servicios', activeIndex: 1, selectedIndex: 0},{name: 'Servicio 1', link: '/servicio1', activeIndex: 1, selectedIndex: 1},{name: 'Servicio 2', link: '/servicio2', activeIndex: 1, selectedIndex: 2},{name: 'Servicio 3', link: '/servicio3', activeIndex: 1, selectedIndex: 3}]

    const routes = [{name: 'Inicio', link: '/',activeIndex: 0},
    {name: 'Servicios', link: '/servicios',activeIndex: 1, ariaOwns: anchorEl ? 'simple-menu' : undefined, ariaPopup: anchorEl ? true : undefined, mouseOver: event => handleClick(event)},
    {name: 'Sobre nosotros', link: '/sobrenosotros',activeIndex: 2},
    {name: 'Casos de éxito', link: '/casos',activeIndex: 3},
    {name: 'Contáctanos', link: '/contacto',activeIndex: 4}]

    useEffect(() => {

        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if(props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex)
                        if(route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                default:
                    break;
            }
        })
    }, [props.value, menuOptions, props.selectedIndex, routes, props])

    const tabs = (
        <React.Fragment>
            <Tabs value={props.value} onChange={handleChange} indicatorColor='secondary' className={classes.tabContainer}>
                {routes.map((route,index) => (
                    <Tab key={`${route}${index}`} className={classes.tab} component={Link} disableRipple to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
                ))}
            </Tabs>
            <Button variant='contained' component={Link} to='/citas' className={classes.button}>
                Agenda tu cita
            </Button>
            <Menu id='simple-menu'
                anchorEl={anchorEl} 
                open={openMenu} 
                onClose={handleClose}
                classes={{paper: classes.menu}} 
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}
                style={{zIndex: 1302}}
                keepMounted
            >
                {menuOptions.map((option, i) => (
                    <MenuItem key={`${option}${i}`} component={Link} to={option.link} classes={{root:classes.menuItem}} onClick={(event) => {handleMenuItemClick(event,i); props.setValue(1); handleClose()}} selected={i === props.selectedIndex && props.value === 1}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)} classes={{paper: classes.drawer}}>
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem divider key={`${route}${route.activeIndex}`} button component={Link} to={route.link} selected={props.value === route.activeIndex} classes={{selected: classes.drawerItemSelected}} onClick={() => {setOpenDrawer(false);props.setValue(route.activeIndex)}}>
                            <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}
                    <ListItem onClick={() => {setOpenDrawer(false);props.setValue(5)}} divider button component={Link} classes={{root: classes.drawerItemSchedule, selected: classes.drawerItemSelected}} to='/citas' selected={props.value === 5}>
                        <ListItemText disableTypography>Agenda tu cita</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} style={{color: trigger ? '#FFFFFF' : 'black'}}/>
            </IconButton>
        </React.Fragment>
    );




    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' color= 'primary' className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to='/' disableRipple className={classes.logoContainer} onClick={()=>props.setValue(0)}> 
                            <img alt='Company logo' className={classes.logo} src={logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}