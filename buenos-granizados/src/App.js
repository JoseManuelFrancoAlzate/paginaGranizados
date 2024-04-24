import { Routes ,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import axios from "axios"
import AdminRegister from './Components/AdminRegister/AdminRegister';
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
      <Header/>
   <Routes>
    <Route path="/admin" element={<AdminLogin/>}/>
    <Route path="/home" element={<Home/>}/> 
   </Routes>
    </div>
  );
}

export default App;
