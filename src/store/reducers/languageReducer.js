const initialState = {
    locale: 'en' // Set initial language to English
};

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                locale: action.payload
            };
        default:
            return state;
    }
};

export default languageReducer;