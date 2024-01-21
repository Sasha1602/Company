import './style/App.css';
import {ComponentsList} from "./components/list/componentsList";
import {NavBar} from "./components/navBar";

export default function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <ComponentsList />
    </div>
  );
}