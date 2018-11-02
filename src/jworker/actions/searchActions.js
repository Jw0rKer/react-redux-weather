export const ACTION = {
    SEARCH_INIT: 'SEARCH_INIT',
    SEARCH_SUCCESS: 'SEARCH_SUCCESS',
    SEARCH_FAIL: 'SEARCH_FAIL'
}

const searchInit = () => ({
    type: ACTION.SEARCH_INIT
})

const searchSuccess = (json) => ({
    type:ACTION.SEARCH_SUCCESS,
    result:json
})

const searchFail = (e) => {
    console.log('fail to search with message: '+e)

}

export const search = (keyword) => (dispatch, getState) => {
    dispatch(searchInit());
    fetch('/search/lond')
        .then(r=>r.json(), e=>dispatch(searchFail(e)))
        .then(json=>dispatch(searchSuccess(json)));
}