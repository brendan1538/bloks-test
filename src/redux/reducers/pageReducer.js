import { PAGE_CHANGE } from '../actions/actionTypes';

export const initialState = {
    pageId: "page-1"
};

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAGE_CHANGE: {
            return {
                ...state,
                pageId: action.pageId
            }
        }
        default: {
            return state;
        }
    }
};