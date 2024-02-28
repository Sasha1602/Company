import { header } from "../data";
import '../style/header.css'
import {Fragment} from "react";
import {HashLink} from "react-router-hash-link";
export const Header = () => {
    const Button = (props) => {
        return (
            <div className={props.class}>
                <p>{props.text}</p>
            </div>
        );
    };
    return (
        <>
            <header className='header' id='home'>
                <div className='textBox'>
                    <h1 className='textBox-title'>{header[0].title}</h1>
                    <p className='textBox-text'>{header[0].text}</p>
                    <HashLink smoof to='#contacts'>
                        <button>Связаться с нами</button>
                    </HashLink>
                </div>
                <img src={header[0].logo} className='header-image' alt='abstract figure'/>
            </header>
            <div className='box-button' id='services'>
                <div className='buttons'>
                    <Button class='button' text={header[1].leftText}/>
                    <div className='stick'></div>
                    <Button class='button' text={header[1].rightText}/>
                </div>
            </div>
        </>
    )
}