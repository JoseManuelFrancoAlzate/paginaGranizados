import { Routes ,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import AdminLogin from './Components/AdminLogin/AdminLogin';

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
