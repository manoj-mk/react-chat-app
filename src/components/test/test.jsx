import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Typography} from '@material-ui/core';
const Test = () => {
    const useStyles = makeStyles((theme) => ({
        tp1: {
            border:"solid" ,
            textAlign:"center"
        },
        bar:{
            backgroundColor:"white"
        }
    }
    ));
    const classes = useStyles();
    return ( 
        <React.Fragment>
            <AppBar className={classes.bar} position="static" >
            <Typography  color="secondary" className={classes.tp1} >This is typography component</Typography>
            </AppBar>
        </React.Fragment>
     );
}
 
export default Test;