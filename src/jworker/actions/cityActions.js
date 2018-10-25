export const ACTION = {
    LOAD_INIT: 'LOAD_INIT',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    LOAD_ERROR: 'LOAD_ERROR'
}

const loadInit = () => ({
    type: ACTION.LOAD_INIT,
    loading: true
})

const loadSuccess = (res) => ({
    type: ACTION.LOAD_SUCCESS,
    name: res.name,
    weatherIcon: res.weather[0].main,
    temp: res.main.temp,
    pressure: res.main.pressure,
    humidity: res.main.humidity,
    min: res.main.temp_min,
    max: res.main.temp_max,
    loading: false
})

const loadError = (message) => ({
    type: ACTION.LOAD_ERROR,
    error: message,
    loading: false
})


export const load = (url) => (dispatch, store) => {
    dispatch(loadInit());
    fetch(url)
        .then(res => res.json(),err=>dispatch(loadError(err)))
        .then(data => dispatch(loadSuccess(data)));
}