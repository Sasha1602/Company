import { header } from "../db";
import '../style/header.css';
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
            <div className="content">
                <div className="content-textBox">
                    <h2 className="content-textBox-h2">{header[0].title}</h2>
                    <p className="content-textBox-p">{header[0].text}</p>
                </div>
                <img src={header[0].image} className='header-image' alt='abstract figure'/>
            </div>

            <div className="section-second">
                <div className="shadow-button">
                    <div className="buttons">
                        <Button class='button-left' text={header[1].leftText}/>
                        <div className="stick" />
                        <Button class='button-right' text={header[1].rightText}/>
                    </div>
                </div>
            </div>
        </>
    )
}