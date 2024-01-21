import '../style/contacts.css'
import { contact } from "../data";
import {MapComponent} from "../Map";
export const Contacts = () => {
    return (
        <section className='section-contact' id='contacts'>
            <h3>{contact[0].title}</h3>
            <div className='grid-contact'>
                <div>
                    <p>{contact[0].leftText1}</p>
                    <p>{contact[0].leftText2}</p>
                </div>
                <div>
                    <p>{contact[0].rightText1}</p>
                    <p>{contact[0].rightText2}</p>
                </div>
            </div>
            <div className='map-box'>
                <MapComponent />
            </div>
        </section>
    )
}