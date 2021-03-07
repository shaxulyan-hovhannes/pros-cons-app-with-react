import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Header from 'components/header/Header'
import ListBlock from 'components/listBlock/ListBlock'
import {DIVIDER_COLOR, PROS_LIST_BLOCK_HEADER_TITLE,
    CONS_LIST_BLOCK_HEADER_TITLE, PROS_INITIAL_DATA,
    CONS_INITIAL_DATA, ITEM_TYPES} from 'constants/index'

const useStyles = makeStyles({
    root: {
        width: '50%',
        minWidth: 350,
        height: '85%',
        boxShadow: '-1px 0px 9px 3px rgba(119,119,119,0.4)',
        borderRadius: 5,
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: '-1px 0px 9px 3px rgba(119,119,119,0.5)',
        },
    },
    headerContainer: {
        height: 100,
    },
    prosConsContainer: {  
        width: '100%',  
        height: 'calc(100% - 100px)',  
        display: 'flex',   
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
            <Header titleText="Should I eat at McDonalds?" />
        </div>
        <div className={classes.prosConsContainer}>
        <ListBlock headerTitle={ PROS_LIST_BLOCK_HEADER_TITLE } initialData={PROS_INITIAL_DATA}
        itemType={ITEM_TYPES.pros} />
        <div className={classes.divider}></div>
       <ListBlock headerTitle={ CONS_LIST_BLOCK_HEADER_TITLE } initialData={CONS_INITIAL_DATA}
       itemType={ITEM_TYPES.cons} />
        </div>
    </div>
    )
}

export default ProsCons