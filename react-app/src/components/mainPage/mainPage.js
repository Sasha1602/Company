import './style/mainPage.css';
import {NavBar} from "./navBar";
import {ComponentList} from "./listComponents/componentList";
export const MainPage = () => {
    return (
        <div className='main'>
            <NavBar position='fixed'/>
            <ComponentList />
        </div>
    );
};