import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import BootstrapTextField from 'components/shared/bootstrapTextField/BootstrapTextField'

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

function DataList({initialData = []}) {
    const classes = useStyles();

    const [listData, setListData] = useState([]);
    const [inputMode, setInputMode] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onHandleClick = useCallback((index, mode) => () => {
      setInputMode(!(mode === 'input'))
      setSelectedIndex(index)
      if (index === listData.length - 1 && listData[index].content) {
        setListData([
          ...listData,
          ...[
            {
              content: ''
            }
          ]
         ]);
      }
    }, [listData]);

    const onHandleChange = useCallback(index => e => {
      const { value } = e.target;

      if (!value) {
        const foundItemIndex = listData.findIndex((item, itemIndex) => {
          return itemIndex === index;
        })
       return  setListData(oldItems => {
          let newDataItems = [...oldItems]
          newDataItems.splice(foundItemIndex, 1);
          return newDataItems;
        });     
      }

      setListData(oldListItems => {
        return [
          ...oldListItems.map((listItem, itemIndex) => index === itemIndex ? ({
            ...listItem,
            content: value.length > 1 ? `${value[0].toUpperCase()}${value.slice(1)}` : value,
          }) : listItem),
          ...index === listData.length - 1 ? [{
            content: ''
          }] : []
        ];
      })
    }, [listData]);

    useEffect(() => setListData(initialData), [initialData]);

    return (
        <div className={classes.root}>
           {
               listData.map((data, index) => (
                <div onClick={onHandleClick(index)} className={classes.listItem}>
                    <div className={classes.numericItem}>{`${index + 1}.`}</div>
                    {inputMode && selectedIndex === index ? (
                      <BootstrapTextField onChange={onHandleChange(index)} value={data.content} autoFocus />
                    ) : (
                      <div className={classes.contentItem}>{data.content}</div>
                    )}
                </div>
               ))
           }
        </div>
    )
}

DataList.propTypes = {
    initialData: PropTypes.array
}

export default DataList