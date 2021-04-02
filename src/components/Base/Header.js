import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import blue from '@material-ui/core/colors/blue'
import logo from '../img/logo-future-ninjas-01.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
    flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <AppBar style={{backgroundColor: '#3a7fff'}} position="static">
            <Toolbar>
            <img src={logo} alt="Logo Future Ninjas" style={{width:'300px'}} className={classes.logo}/>
                <Typography variant="h6" className={classes.title}>
                </Typography>
                    <Button color="inherit">Sobre</Button>
                    <Button color="inherit">Ver Anúncios</Button>
                    <Button color="inherit">Criar Anúncio</Button>
            </Toolbar>
        </AppBar>
    </div>
);
}