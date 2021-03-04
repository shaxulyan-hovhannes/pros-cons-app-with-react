import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        background: '#919191'
    }    
})

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.root}></div>
    )
}

export default Header