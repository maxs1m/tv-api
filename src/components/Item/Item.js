import React, {useState} from "react";
import moment from "moment";
import noImage from '../../image/noImage.jpeg'
import '../../App.css'

const Item = (props) => {
    const [show, setShow] = useState(false)
    const toggleShow = () => {
        show? setShow(false):setShow(true)
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }

    return <div className='serial'>
        {show && <div className='cover_full__container'>
            <img src={(props.item.show.image === null)? noImage:props.item.show.image.original}
                 className='cover_full'
                 onClick={toggleShow}/>
        </div>}
        <img src={(props.item.show.image === null)? noImage:props.item.show.image.medium} className='cover' onClick={toggleShow}/>
        <div className='serial__desc'>
            <div>
                <div>{props.item.name}</div>
                <div className='text_grey'>{ moment(props.item.show.premiered, "YYYY-MMMM-DD").format("YYYY")}</div>
            </div>
            <div className='serial__desc_box text_grey'>
                <div>Сезон: {props.item.season}</div><div>Эпизод: {props.item.number}</div>
            </div>
        </div>

    </div>
}

export default Item