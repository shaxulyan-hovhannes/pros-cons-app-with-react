import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    alertText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    }
})

function Alert(props) {
    return <MuiAlert {...props} />;
  }

function SnackBar({
    alertMessage = '',
    alertSeverity = '',
    alertElevation = 0,
    alertVariant = '',
    ...restProps}) {
        const classes = useStyles()
        
        return (
        <Snackbar transitionDuration={{enter: 500, exit: 2000}} {...restProps}>
            <Alert
            style={{width: 350}}
            onClose={() => {}}
            severity={alertSeverity}
            elevation={alertElevation}
            variant={alertVariant}
            >
                <p className={classes.alertText}>{alertMessage}</p>
                </Alert>
                </Snackbar> )
                }

export default SnackBar