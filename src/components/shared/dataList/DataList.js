import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ListItem from './components/listItem/ListItem';
import update from 'immutability-helper';

const useStyles = makeStyles({
    root: {
        padding: 25,
    },
    listItem: {
        fontSize: 22,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        letterSpacing: 1,
        border: '1px solid red',
        cursor: 'pointer',
        background: 'green'
    },
    numericItem: {
        fontWeight: 'bold',
        marginRight: 3
    },
    contentItem: {
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        padding: '0 5px'
    },
});

function DataList({initialData = [], itemType = ''}) {
    const classes = useStyles();

    const [listData, setListData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const moveCard = useCallback((dragIndex, hoverIndex) => {
      const dragCard = listData[dragIndex];
      setListData(update(listData, {
          $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
          ],
      }));
  }, [listData]);

    useEffect(() => setListData(initialData), [initialData]);

    return (
        <div className={classes.root}>
           {
               listData.map((data, index) => (
                 <ListItem
                 key={index}
                 listItem={data}
                 index={index}
                 selectedIndex={selectedIndex}
                 setSelectedIndex={setSelectedIndex}
                 listData={listData}
                 setListData={setListData}
                 itemType={itemType}
                 moveCard={moveCard}
                 />
               ))
           }
        </div>
    )
}

DataList.propTypes = {
    initialData: PropTypes.array,
    itemType: PropTypes.string
}

export default DataList