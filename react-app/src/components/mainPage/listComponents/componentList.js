import {Header} from "./header";
import {Info} from "./info";
import '../style/componentList.css'
import {Team} from "./team";
export const ComponentList = () => {
    return (
        <div className='list'>
            <Header/>
            <Info/>
            <Team/>
        </div>
    );
}