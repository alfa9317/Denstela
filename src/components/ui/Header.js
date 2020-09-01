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
        color: 'white'  
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '55px'
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
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
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        '& .MuiListItemText-root': {
            opacity: 1
        }
        
    }
}))

export default function Header(props){
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value,setValue] = useState(0);
    const [anchorEl,setAnchorEl] = useState(null);
    const [openMenu,setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleMenuItemClick = (e,i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
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
                    if(value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if(route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                default:
                    break;
            }
        })
    }, [value, menuOptions, selectedIndex, routes])

    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} indicatorColor='secondary' className={classes.tabContainer}>
                {routes.map((route,index) => (
                    <Tab key={`${route}${index}`} className={classes.tab} component={Link} disableRipple to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
                ))}
            </Tabs>
            <Button variant='contained' color='white' className={classes.button}>
                Contáctanos
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
                    <MenuItem key={`${option}${i}`} component={Link} to={option.link} classes={{root:classes.menuItem}} onClick={(event) => {handleMenuItemClick(event,i); setValue(1); handleClose()}} selected={i === selectedIndex && value === 1}>
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
                        <ListItem divider key={`${route}${route.activeIndex}`} button component={Link} to={route.link} selected={value === route.activeIndex} classes={{selected: classes.drawerItemSelected}} onClick={() => {setOpenDrawer(false);setValue(route.activeIndex)}}>
                            <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}
                    <ListItem onClick={() => {setOpenDrawer(false);setValue(5)}} divider button component={Link} classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}} to='/estimate' selected={value === 5}>
                        <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    );




    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed'>
                    <Toolbar disableGutters>
                        <Button component={Link} to='/' disableRipple className={classes.logoContainer} onClick={()=>setValue(0)}> 
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