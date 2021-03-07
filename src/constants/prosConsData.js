const PROS_LIST_BLOCK_HEADER_TITLE = 'PROS';

const CONS_LIST_BLOCK_HEADER_TITLE = 'CONS';

const PROS_INITIAL_DATA = [
    {
        content: 'It\'s really tasty 1'
    },
    {
        content: 'It\'s really tasty 2'
    },
    {
        content: 'It\'s really tasty 3'
    },
    {
        content: 'It\'s really tasty 4'
    },
    {
        content: 'It\'s really tasty 5'
    },
    {
        content: 'Making a new entry'
    }
];

const CONS_INITIAL_DATA = [
    {
        content: 'Makes me fat'
    },
    {
        content: 'Too expensive'
    }
];

const ITEM_TYPES = {
    pros: 'pros',
    cons: 'cons',
};

const NOTIFICATION_DATA = {
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    message: 'Duplicated input item',
    severity: 'warning',
    elevation: 10,
    variant: 'outlined'
} 

export {
    PROS_LIST_BLOCK_HEADER_TITLE,
    CONS_LIST_BLOCK_HEADER_TITLE,
    PROS_INITIAL_DATA,
    CONS_INITIAL_DATA,
    ITEM_TYPES,
    NOTIFICATION_DATA
};