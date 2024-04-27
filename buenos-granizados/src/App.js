import { Routes ,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import axios from "axios"
import SlushysData from './Components/SlushysData/SlushysData';
import Configuracion from './Components/Configuracion/Configuracion';
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/settings" element={<Configuracion/>}/>
    <Route path="/slushys/:id" element={<SlushysData/>} />
    <Route path="/admin" element={<AdminLogin/>}/>
    <Route path="/home" element={<Home/>}/> 
   </Routes>
    </div> 
  );
}

export default App;
