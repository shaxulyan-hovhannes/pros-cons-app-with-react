import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        padding: '0 30px',
        width: '100%',
        height: '100%',
        background: '#828282',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17
    }    
})

function Header({titleText = ''}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <h1>{titleText}</h1>
        </div>
    )
}

Header.propTypes = {
    titleText: PropTypes.string
}

export default Header