import React from 'react';
import { makeStyles } from '@material-ui/styles'
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
    root: {
      marginLeft: 5,
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        height: 30,
        fontSize: 22,
        borderRadius: 4,
        backgroundColor: "#fcfcfb",
        transition: 'box-shadow 0.3s, border-color 0.3s',
        letterSpacing: 1,
        "&:hover": {
        backgroundColor: "#fff"
    },
    "&$focused": {
      marginLeft: 5,
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        height: 30,
        fontSize: 22,
        backgroundColor: "#fff",
        boxShadow: `#6EA1FF 0px 0px 5px 3px`,
        borderColor: "#6EA1FF",
        letterSpacing: 1,
    }
},
focused: {}
});

  function BootstrapTextField({...props}) {
    const classes = useStyles();
  
    return (
      <>
      <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
      </>
    );
  }

  export default BootstrapTextField