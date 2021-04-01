import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@material-ui/core";

const Footer = () => <>
        <AppBar position="static" elevation={5} component="footer" color="primary">
            <Toolbar style={{ justifyContent: "center", minHeight: 128 }}>
                <Typography style={{ textAlign: "left" }} variant="subtitle1">Atendendo as suas necessidades desde 1990.</Typography>
                <Typography variant="caption">©2021 - Future Ninjas Enterprises</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;
