import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import {
    TOGGLE_NOTIFICATION_OPEN,
    SET_DUPLICATED_DATA
} from './actions'

const initialState = {
    isNotificatonOpen: false,
    duplicatedItemIndex: -1,
    duplicatedContent: ''
};

const reducers = handleActions({
    [TOGGLE_NOTIFICATION_OPEN]: (state, {payload}) => produce(state, draft => {
        draft.isNotificatonOpen = payload;
    }),
    [SET_DUPLICATED_DATA]: (state, {payload}) => produce(state, draft => {
        draft.duplicatedItemIndex = payload.index;
        draft.duplicatedContent = payload.content;
    })
}, initialState);

export default reducers;