const selectNotificationOpen = ( { prosCons: { isNotificatonOpen } } ) => isNotificatonOpen;

const selectDuplicatedItemIndex = ( { prosCons: { duplicatedItemIndex } } ) => duplicatedItemIndex;

export {
    selectNotificationOpen,
    selectDuplicatedItemIndex
};