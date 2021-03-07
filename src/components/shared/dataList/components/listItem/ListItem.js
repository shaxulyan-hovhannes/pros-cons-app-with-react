import React, { useState, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDrag, useDrop } from 'react-dnd'
import { makeStyles } from '@material-ui/styles'
import BootstrapTextField from 'components/shared/bootstrapTextField/BootstrapTextField'
import { DIVIDER_COLOR } from 'constants/index';

const useStyles = makeStyles({
    listItem: {
        fontSize: 22,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5,
        letterSpacing: 1,
        cursor: 'move',
        border: props => props.isDragging ? `3px dashed ${DIVIDER_COLOR} ` : 'none'
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
})

function ListItem({
    listItem,
    index,
    selectedIndex,
    setSelectedIndex,
    listData,
    setListData,
    itemType,
    moveCard
 }) {

    const [inputMode, setInputMode] = useState(false);

    const dndRef = useRef(null);

    const [{isDragging}, drag] = useDrag(() => ({
        item: { type: itemType, content: listItem.content, index },
        collect: (monitor) => {
          return ({
            isDragging: monitor.isDragging(),
          });
        },
      }));

      const classes = useStyles({isDragging});

      const [, drop] = useDrop({
        accept: itemType,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item) {
            if (!dndRef.current) {
                return;
            }

            const dragIndex = item.index;
            const hoverIndex = index;
            
            if (dragIndex === hoverIndex) {
                return;
            }

            moveCard(dragIndex, hoverIndex);
     
            item.index = hoverIndex;
        },
    });

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
      }, [listData, setListData, setSelectedIndex]);

      const onHandleChange = useCallback(index => e => {
        const { value } = e.target;
  
        if (!value) {
          const foundItemIndex = listData.findIndex((item, itemIndex) => {
            return itemIndex === index;
          });

         return  setListData(oldItems => {
            let newDataItems = [...oldItems];

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
      }, [listData, setListData]);

      drag(drop(dndRef));

    return (
    <div className={classes.listItem} id={`${index}`} ref={ dndRef }>
        <div className={classes.numericItem}>{`${index + 1}.`}</div>
        {inputMode && selectedIndex === index ? (
        <BootstrapTextField onBlur={() => {
            setInputMode(false)
        }}  onChange={onHandleChange(index)} value={listItem.content} autoFocus />
        ) : (
        <div onClick={onHandleClick(index)} className={classes.contentItem}>{listItem.content}</div>
        )}
        </div>
        )
    }

    ListItem.propTypes = {
        listItem: PropTypes.object,
        index: PropTypes.number,
        selectedIndex: PropTypes.number,
        setSelectedIndex: PropTypes.func,
        listData: PropTypes.array,
        setListData: PropTypes.func,
        itemType: PropTypes.string,
        moveCard: PropTypes.func
    }

    export default ListItem