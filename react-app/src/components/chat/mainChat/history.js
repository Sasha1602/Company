import history from '../../../image/history.svg'
import '../style/history.css'
import {useState} from "react";
export const History = () => {
    const [open, setOpen] = useState(true);
    const openForm = () => {
        console.log(open)
        setOpen(!open);
    }

    return (
        <div className='button-history'>
            <div onClick={openForm} className='button'>
                <img src={ history } className='history-logo' alt='history-logo'/>
            </div>
        </div>
    )
}