import '../style/componentsList.css'

import {Header} from "./header";
import {Info} from "./info";
import {About} from "./about";
import {News} from "./news";
import {Contacts} from "./contacts";
import {Footer} from "./footer";

export const ComponentsList = () => {
    return (
        <>
        <body className='body'>
            <Header />
            <Info />
            <div className='shadow-box'>
                <About />
                <News />
                <Contacts />
            </div>
        </body>
        <Footer />
    </>
    )
}