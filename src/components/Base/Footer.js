import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Link
} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


const Footer = () => <>
        <AppBar style={{backgroundColor:"#efefef"}} position="static" elevation={5} component="footer" color="primary">
            {/* <Toolbar style={{ justifyContent: "center", minHeight: 80}}>
                <Typography style={{ textAlign: "left" }} variant="subtitle1">Atendendo as suas necessidades desde 1990.</Typography>
            </Toolbar> */}
            <Toolbar style={{ justifyContent: "center", marginTop:"30px"}}>
                <Link href="http://instagram.com">
                    <IconButton style={{ color: "#3a7fff"}}>
                        <InstagramIcon />
                    </IconButton>
                </Link>
                <Link href="http://facebook.com">
                    <IconButton style={{ color: "#3a7fff"}}>
                        <FacebookIcon />
                    </IconButton>
                </Link>
                <Link href="http://twitter.com">
                    <IconButton  style={{ color: "#3a7fff"}}>
                        <TwitterIcon />
                    </IconButton>
                </Link>
             </Toolbar>
            <Toolbar style={{ justifyContent: "center", color:"#3c3c3c"}}>
                <Typography variant="subtitle1">©2021 - Future Ninjas Enterprises</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;
