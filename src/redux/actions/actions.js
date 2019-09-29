import { PAGE_CHANGE } from '../actions/actionTypes';

export const activePage = pageId => {
    return ({
        type: PAGE_CHANGE,
        payload: pageId
    })
};