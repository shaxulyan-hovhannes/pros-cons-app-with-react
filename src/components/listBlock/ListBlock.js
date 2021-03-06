import React from 'react';
import PropTypes from  'prop-types'
import { makeStyles } from '@material-ui/styles';
import {DIVIDER_COLOR} from 'constants/colors'
import DataList from 'components/shared/dataList/DataList'


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

function ListBlock({headerTitle = '', initialData = []}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.listHeader}>{headerTitle}</div>
            <div className={classes.divider}></div>
            <div className={classes.listContainer}>
                <DataList initialData={initialData} />
            </div>
        </div>
    )
}

ListBlock.propTypes = {
    headerTitle: PropTypes.string,
    initialData: PropTypes.array
}

export default ListBlock