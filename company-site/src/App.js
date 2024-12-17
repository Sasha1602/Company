import {ComponentsList} from "./apps/landing";
import {NavBar} from "./components/navBar";
import './style/App.css';

export default function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <ComponentsList />
    </div>
  );
}