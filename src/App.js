import './App.css';
import React from "react";
import Schedule from "./components/Schedule/Schedule";
import {connect} from "react-redux";
import {getSchedule, setDate} from "./redux/scheduleReducer";
import 'react-calendar/dist/Calendar.css';
import CalendarContainer from "./components/Calendar/Calendar";


const App = (props) => {
    return (
        <div className="App">
            {props.date
                ? <Schedule date={props.date}
                            getSchedule={props.getSchedule}
                            films={props.films}
                            setDate={props.setDate}/>
                : <CalendarContainer setDate={props.setDate}/>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    date: state.schedule.date,
    films: state.schedule.films
})

export default connect(mapStateToProps, {setDate, getSchedule})(App) ;
