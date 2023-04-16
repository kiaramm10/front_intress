import './App.css';
import Documents from './components/common/Documents';
import Holidays from './components/common/Holidays';
import Personal from './components/common/Personal';
import Signin from './components/common/Signin';
import Workshops from './components/common/Workshops';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <Signin />
      
    </div>
  );
}

export default App;
