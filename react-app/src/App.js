import {Route, Routes} from "react-router-dom";
import '../src/style/App.css';

import {MainPage} from "./components/mainPage/mainPage";
import {Contacts} from "./components/chat/contacts";
import {Settings} from "./components/chat/settings";
import {Input} from "./components/chat/mainChat/input";
export default function App() {
    return (
        <Routes>
            <Route exact path='/' element={MainPage()}/>
            <Route path='chat' element={<Input/>}/>
            <Route path='chat/contacts' element={<Contacts/>}/>
            <Route path='chat/settings' element={<Settings/>}/>
        </Routes>
    );
};

