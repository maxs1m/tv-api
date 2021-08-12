import React, {useEffect} from "react";
import DayList from "../DayList/DayList";
import moment from "moment";
import arrow from '../../image/arrow-prev.png'
import '../../App.css'
import Title from "../TItle/Title";

const Schedule = (props) => {

    useEffect(() => {
        props.getSchedule()
    }, [props.date])

    let dayList = props.films.map((day, id) => <DayList date={moment(props.date).add(id, 'd')} films={day} key={id}/>)

    return <><Title/>
            <button className='btn__back' onClick={() => props.setDate("")}><img src={arrow} className='back'/></button>
            {dayList}
        </>
}

export default Schedule