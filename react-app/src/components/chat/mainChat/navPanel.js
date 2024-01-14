import {Link} from "react-router-dom";
import {Nav} from "../db";
import '../style/navPanel.css'
import {NavElem} from "../../UI/navElem";
export const NavPanel = () => {
    return (
        <nav className='navPanel'>
            <Link to='/' className='logo-position'>
                <div className='logo-back'>
                    <div className='logo'><img src={Nav[3].logo} alt='logo-of-company'/></div>
                </div>
            </Link>
            <ul className='navigation-position'>
                {[...Array(3)].map((_, index) => (
                    <NavElem className='navigation'>
                        <li className="elem" key={index}>
                            <Link to={{pathname: Nav[index].link}} className='nav-link'>a</Link>
                        </li>
                    </NavElem>
                ))}
            </ul>
        </nav>
    )
}