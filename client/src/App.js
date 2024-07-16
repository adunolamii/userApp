import './App.css';
import { Home } from './Pages/Home';
import About from './Pages/About';
import { HomeAdmin } from './Admin/HomeAdmin';
import { AboutAdmin } from './Admin/AboutAdmin';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
          {/* <HomePage/> */}
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/homeAdmin"  element={<HomeAdmin/>}/>
            <Route path="/aboutAdmin"  element={<AboutAdmin/>}/>
            
      </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
