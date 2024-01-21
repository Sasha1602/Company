import { about } from "../data";
import '../style/about.css'
export const About = () => {
    return (
        <section className='section-about' id='company'>
            <h3>{about[0].title}</h3>
            <div className='about-box'>
                <div className='text-about'>
                    <p>{about[0].text}</p>
                </div>
                <img src={about[0].image} className='about-logo' alt='company-logo'/>
            </div>
        </section>
    )
}
