import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {navElement} from "./db";
import './style/navBar.css';
export const NavBar = () => {
    return (
        <div className="navBar">
            <Link to='/'> <img src={navElement[6].image} className="mainLogo" alt='logo-of-company'/></Link>
            <Link to='/chat'>Chat</Link>
            <ul className="header-nav">
                {[...Array(6)].map((_, index) => (
                    <li className="header-nav-li" key={index}>
                        <HashLink smoff to='/'>{navElement[index].element}</HashLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};