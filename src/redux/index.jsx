import { createStore } from 'redux';

function reducer(state, action) {
    switch (action.type) {
        case 'HEADER_BACK_CHANGE':
            return {
                headerBack: action.headerBack
            }
        default:
            return state;
    }
}

export const store = createStore(
    reducer,
    window.devToolsExtension && window.devToolsExtension()
)