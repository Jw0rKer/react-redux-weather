import {ACTION} from "jworker/actions/searchActions";

export const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION.SEARCH_INIT:
            return state;
        case ACTION.SEARCH_SUCCESS:
            return {
                ...action.result
            }
        default:
            return state;
    }
}