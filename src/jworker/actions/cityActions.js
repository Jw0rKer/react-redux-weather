export const ACTION = {
    LOAD_INIT: 'LOAD_INIT',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    LOAD_ERROR: 'LOAD_ERROR'
}

const loadInit = (id) => ({
    type: ACTION.LOAD_INIT,
    loading: true,
    id:id
})

const loadSuccess = (id,res) => ({
    type: ACTION.LOAD_SUCCESS,
    name: res.name,
    weatherIcon: res.weather[0].main,
    temp: res.main.temp,
    pressure: res.main.pressure,
    humidity: res.main.humidity,
    min: res.main.temp_min,
    max: res.main.temp_max,
    loading: false,
    id:id
})

const loadError = (id,message) => ({
    type: ACTION.LOAD_ERROR,
    error: message,
    loading: false,
    id:id
})


export const load = (id) => (dispatch, store) => {
    dispatch(loadInit(id));
    fetch('/current/1')
        .then(res => res.json(),err=>dispatch(loadError(id,err)))
        .then(data => dispatch(loadSuccess(id,data)));
}

export const loadAll= () => (dispatch, getStore) => {
    Object.keys(getStore().city).map(id=>dispatch(load(id)));
}