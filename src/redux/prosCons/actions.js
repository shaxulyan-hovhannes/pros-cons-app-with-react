import { createActions } from 'redux-actions';

const TOGGLE_NOTIFICATION_OPEN = 'TOGGLE_NOTIFICATION_OPEN';
const SET_DUPLICATED_DATA = 'SET_DUPLICATED_DATA';

const prosConsActions = createActions(
    TOGGLE_NOTIFICATION_OPEN,
    SET_DUPLICATED_DATA
);

export default prosConsActions;

export {
    TOGGLE_NOTIFICATION_OPEN,
    SET_DUPLICATED_DATA
};