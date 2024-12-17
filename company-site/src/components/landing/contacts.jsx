import { MapComponent } from "../Map";
import { contact } from "../../data";
import '../../style/contacts.css'

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