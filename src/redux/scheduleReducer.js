import axios from "axios";
import moment from "moment";

const SET_DATE = 'SET_DATE'
const SET_SCHEDULE = 'SET_SCHEDULE'

let initialState= {
    date: '',
    films: [

    ]
}

const scheduleReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {...state, date: action.date}
        case SET_SCHEDULE:
            return {...state, films: action.data}
        default:
            return state
    }
}

export const setDate = (date) => ({type: SET_DATE, date})
export const setSchedule = (data) => ({type: SET_SCHEDULE, data})

export const getSchedule = () => {
    return async (dispatch, getState) => {
        let data = []
        for (let i = 0; i < 7; i++) {
            let answer = await axios.get(`https://api.tvmaze.com/schedule?country=US&date=${moment(getState().schedule.date).add(i, 'd').format("YYYY-MM-DD")}`).then(response => response.data)
            data.push(answer)
        }
        dispatch(setSchedule(data))
    }
}

export default scheduleReducers