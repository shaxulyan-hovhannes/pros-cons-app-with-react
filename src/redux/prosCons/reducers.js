import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import {
    TOGGLE_NOTIFICATION_OPEN,
    SET_DUPLICATED_ITEM_INDEX
} from './actions'

const initialState = {
    isNotificatonOpen: false,
    duplicatedItemIndex: null,
};

const reducers = handleActions({
    [TOGGLE_NOTIFICATION_OPEN]: (state, {payload}) => produce(state, draft => {
        draft.isNotificatonOpen = payload;
    }),
    [SET_DUPLICATED_ITEM_INDEX]: (state, {payload}) => produce(state, draft => {
        draft.duplicatedItemIndex = payload;
    })
}, initialState);

export default reducers;