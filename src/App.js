import './App.css';
import Documents from './components/common/Documents';
import Holidays from './components/common/Holidays';
import Personal from './components/common/Personal';
import NavbarMaster from './components/header/NavbarMaster';
import Signin from './components/common/Signin';
import Browser from './components/common/Browser';
import Workshops from './components/common/Workshops';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Documents />
      <NavbarMaster />
      <Browser />
      <Holidays />
      <Personal />
      <Workshops/>
      <Signin/>
      
    </div>
  );
}

export default App;
