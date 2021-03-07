import { createActions } from 'redux-actions';

const TOGGLE_NOTIFICATION_OPEN = 'TOGGLE_NOTIFICATION_OPEN';
const SET_DUPLICATED_ITEM_INDEX = 'SET_DUPLICATED_ITEM_INDEX';

const prosConsActions = createActions(
    TOGGLE_NOTIFICATION_OPEN,
    SET_DUPLICATED_ITEM_INDEX
);

export default prosConsActions;

export {
    TOGGLE_NOTIFICATION_OPEN,
    SET_DUPLICATED_ITEM_INDEX
};