import {HashLink, HashLink as Link} from 'react-router-hash-link';
import {navElement} from './data'

import './style/navBar.css';
export const NavBar = () => {
    return (
        <nav className="navBar" id='home'>
            <Link to='/' className='logoLink'>
                <img src={navElement[navElement.length-1].image} className="mainLogo" alt='logo-of-company'/>
            </Link>
            <ul className="header-nav">
                {[...Array(navElement.length-1)].map((_, index) => (
                    <li className="header-nav-li" key={index}>
                        <HashLink smooth to={navElement[index].link}>{navElement[index].element}</HashLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}