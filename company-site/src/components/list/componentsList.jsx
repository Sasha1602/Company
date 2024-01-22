import '../style/componentsList.css'

import {Header} from "./header";
import {Info} from "./info";
import {About} from "./about";
import {Contacts} from "./contacts";
import {Supports} from "./supports";
import {Footer} from "./footer";

export const ComponentsList = () => {
    return (
        <>
            <body className='body'>
                <Header />
                <Info />
                <div className='shadow-box'>
                    <About />
                    <Supports />
                    <Contacts />
                </div>
                <Footer />
            </body>
        </>
    )
}