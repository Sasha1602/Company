import {info} from "../db";
import '../style/info.css';
export const Info = () => {
    const Dot = (props) => {
        return (
            <div className="dot">
                <img src={info[0].point} alt='point'/>
                <p className="dots-text">{props.name}</p>
            </div>
        )
    };
    return (
        <div className="basic-services">
            <div className="laptop-box">
                <img src={info[0].image} className="laptop" alt='laptop'/>
            </div>
            <div className="services">
                <div className="heading-services">Основные услуги</div>
                    <p className="text-services">{info[0].text}</p>
                <div className="dots-list">
                    <Dot name={info[0].point1}/>
                    <Dot name={info[0].point2}/>
                    <Dot name={info[0].point3}/>
                </div>
            </div>
        </div>
    );
};