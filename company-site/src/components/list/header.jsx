import { header } from "../data";
import '../style/header.css'
export const Header = () => {
    const Button = (props) => {
        return (
            <div className={props.class}>
                <p className="text-in-button">{props.text}</p>
            </div>
        );
    };
    return (
        <>
            <header className='header' id='home'>
                <div className='textBox'>
                    <h2 className='textBox-title'>{header[0].title}</h2>
                    <p className='textBox-text'>{header[0].text}</p>
                </div>
                <img src={header[0].logo} className='header-image' alt='abstract figure'/>
            </header>
            <div className='shadow-button' id='services'>
                <div className='buttons'>
                    <Button class='button' text={header[1].leftText}/>
                    <Button class='button' text={header[1].rightText}/>
                </div>
            </div>
        </>
    )
}