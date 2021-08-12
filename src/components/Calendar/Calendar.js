import React from "react";
import {Calendar} from "react-calendar";
import '../../App.css';
import tv from "../../image/TV.png";
import Title from "../TItle/Title";

const CalendarContainer = (props) => {
    return (
        <div className='calendar__container'>
            <Title/>
            <img src={tv} className='img'/>
            <span className='desc'>Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день</span>
            <Calendar onClickDay={(value) => props.setDate(value)}
                      next2Label={null}
                      prev2Label={null}
                      className="calendar"/>
        </div>)
}

export default CalendarContainer