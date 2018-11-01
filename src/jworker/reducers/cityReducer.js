import {ACTION} from 'jworker/actions/cityActions';

export const cityReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION.LOAD_INIT:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    loading: action.loading
                }
            }
        case ACTION.LOAD_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    loading: action.loading,
                    name: action.name,
                    weatherIcon: action.weatherIcon,
                    temp: action.temp,
                    pressure: action.pressure,
                    humidity: action.humidity,
                    min: action.min,
                    max: action.max
                }
            }
        case ACTION.LOAD_ERROR:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    loading: action.loading,
                    error: action.error
                }
            }
        default:
            return state

    }
}