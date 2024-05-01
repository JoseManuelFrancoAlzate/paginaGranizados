import { Routes ,Route, Navigate} from 'react-router-dom';
import Home from './Components/Home/Home';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import axios from "axios"
import SlushysData from './Components/SlushysData/SlushysData';
import Configuracion from './Components/Configuracion/Configuracion';
import {getActionAdmin} from './Redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
axios.defaults.baseURL = "http://localhost:3001/";


function App() {
  const stateAdmin = useSelector(state => state.admin)
  const dispatch = useDispatch()

  console.log(stateAdmin)    
  useEffect(()=>{
dispatch(getActionAdmin())
  },[dispatch])

  return (
    <div className="App">
      { !stateAdmin || stateAdmin.asset === false  ? (
         <Routes>
         <Route path="/" element={<Home/>}/> 
         <Route path="/slushys/:id" element={<SlushysData/>} />
         <Route path="/admin" element={<AdminLogin/>}/>
         <Route path="*" element={<Navigate replace to="/"/>}/>
         </Routes>
      ) : (
        <Routes>
        <Route path="/settings" element={<Configuracion/>}/>
        <Route path="/slushys/:id" element={<SlushysData/>} />
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/" element={<Home/>}/> 
        <Route path="*" element={<Navigate replace to="/"/>}/>

       </Routes>
      )
}
    </div> 
  );
}

export default App;
