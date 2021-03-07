import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Header from 'components/header/Header'
import ListBlock from 'components/listBlock/ListBlock'
import {DIVIDER_COLOR, PROS_LIST_BLOCK_HEADER_TITLE,
    CONS_LIST_BLOCK_HEADER_TITLE, PROS_INITIAL_DATA,
    CONS_INITIAL_DATA, ITEM_TYPES, NOTIFICATION_DATA} from 'constants/index';
import Notification from 'components/shared/notification/Notification';
import { selectNotificationOpen } from 'redux/prosCons/selectors';    

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
    const classes = useStyles();

    const isNotificatonOpen = useSelector(selectNotificationOpen);

    console.log('IS OPEN', isNotificatonOpen)
    
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
        <Notification
         open={isNotificatonOpen}
         anchorOrigin={NOTIFICATION_DATA.anchorOrigin}
         alertMessage={NOTIFICATION_DATA.message}
         alertSeverity={NOTIFICATION_DATA.severity}
         alertElevation={NOTIFICATION_DATA.elevation}
         alertVariant={NOTIFICATION_DATA.variant}
        />
    </div>
    )
}

export default ProsCons