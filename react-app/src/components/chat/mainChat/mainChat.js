import '../style/mainChat.css';
import {NavPanel} from "./navPanel";
import {History} from "./history";
export const MainChat = (props) => {
    return (
        <div className='sectionChat'>
            <NavPanel/>
            {props.children}
            <History/>
        </div>
    );
};