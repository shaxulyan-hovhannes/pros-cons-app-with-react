import React from 'react';
import PropTypes from  'prop-types'
import { DndProvider } from 'react-dnd';
import { makeStyles } from '@material-ui/styles';
import {DIVIDER_COLOR } from 'constants/index';
import DataList from 'components/shared/dataList/DataList';
import { HTML5Backend } from 'react-dnd-html5-backend';

const useStyles = makeStyles({
    root: {
        width: 'calc(50% - 1px)',
        height: '100%',
    },
    listHeader: {
        height: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 26,
        fontWeight: 400
    },
    divider: {
        height: 2,
        background: DIVIDER_COLOR
    },
    listContainer: {
        height: 'calc(100% - 70px)',
        overflowY: 'auto' 
    }
})

function ListBlock({headerTitle = '', initialData = [], itemType = ''}) {
    const classes = useStyles();

    return (
       <DndProvider backend={ HTML5Backend }>
            <div className={classes.root}>
            <div className={classes.listHeader}>{headerTitle}</div>
            <div className={classes.divider}></div>
            <div className={classes.listContainer}>
                <DataList initialData={initialData} itemType={itemType} />
            </div>
        </div>
       </DndProvider>
    )
}

ListBlock.propTypes = {
    headerTitle: PropTypes.string,
    initialData: PropTypes.array,
    itemType: PropTypes.string
}

export default ListBlock