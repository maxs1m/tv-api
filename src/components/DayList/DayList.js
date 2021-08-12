import React, {useState} from "react";
import 'moment/locale/ru'
import moment from "moment";
import Item from "../Item/Item";
import classNames from "classnames";

const DayList = (props) => {
    const [hide, setHide] = useState(true)

    let end = () => {
        let string = (props.films.length - 2).toString()
        if (string.charAt(string.length - 1) === '1' && string.charAt(string.length - 2) !== '1') return 'сериал'
        else if (string.charAt(string.length - 1) === '2' || string.charAt(string.length - 1) === '3' || string.charAt(string.length - 1) === '4' && string.charAt(string.length - 1) !== '1') return 'сериала'
        return 'сериалов'
    }

    let toggleHide = () => {
        hide? setHide(false):setHide(true)
    }

    let date = moment(props.date, "YYYY-MM-DD").format("D MMMM YYYY")
    let list = props.films.map(item => <Item item={item}
                                             key={item.id}/>)

    return (<div className='list__container'>
            <div className={classNames('list', {'hide': hide})}>
                <div className='list__day'>{date}</div>
                {list}
            </div>
            {(props.films.length - 2 > 0) && <button className='btn'
                     onClick={toggleHide}>{hide ? `Еще ${props.films.length - 2} ${end()}` : 'Показать основные'}</button>}
        </div>
    )
}

export default DayList