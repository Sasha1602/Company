import {Link} from "react-router-dom";
import {supports} from "../data";
import '../style/supports.css'
export const Supports = () => {
    return (
        <section className='section-support' id='supports'>
            <h3>{supports[supports.length-1].title}</h3>
            <div className='support-box'>
                {[...Array(supports.length-1)].map((_, index) => (
                    <Link to={supports[index].link} target='_blank' className='support-div'>
                        <img src={supports[index].image} className='sup-image' alt='supports'/>
                    </Link>
                ))}
            </div>
        </section>
    )
}