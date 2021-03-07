const selectNotificationOpen = ( { prosCons: { isNotificatonOpen } } ) => isNotificatonOpen;

const selectDuplicatedItemIndex = ( { prosCons: { duplicatedItemIndex } } ) => duplicatedItemIndex;
const selectDuplicatedContent = ( { prosCons: { duplicatedContent } } ) => duplicatedContent;

export {
    selectNotificationOpen,
    selectDuplicatedItemIndex,
    selectDuplicatedContent,
};