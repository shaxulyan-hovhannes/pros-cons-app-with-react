import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { DIVIDER_COLOR } from 'constants/colors';
import Header from 'components/header/Header'

const useStyles = makeStyles({
    root: {
        width: '50%',
        height: '85%',
        boxShadow: '-1px 0px 9px 3px rgba(119,119,119,0.4)',
        borderRadius: 5,
        '&:hover': {
            boxShadow: '-1px 0px 9px 3px rgba(119,119,119,0.5)',
        },
    },
    headerContainer: {
        height: 100,
    },
    prosConsContainer: {    
        height: 'calc(100% - 100px)',  
        transition: 'box-shadow 0.3s',
        display: 'flex',      
       alignSelf: 'stretch'
    },
    item: {
        flex: 1,
        height: '100%',
    },
    divider: {
        width: 2,
        background: DIVIDER_COLOR,
    }
})

function ProsCons() {
    const classes = useStyles()
    
    return (
    <div className={classes.root}>
        <div className={classes.headerContainer}>
            <Header />
        </div>
        <div className={classes.prosConsContainer}>
        <div className={classes.item}></div>
        <div className={classes.divider}></div>
        <div className={classes.item}></div>
        </div>
    </div>
    )
}

export default ProsCons