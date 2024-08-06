import Headers from './components/Headers';
import Home from './Pages/Home';
import CartDetails from './Pages/CartDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import toast,{ Toaster } from 'react-hot-toast';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Foodlist from './Pages/Foodlist';
import Details from './Pages/Details';
import Searchlist from './Pages/Searchlist';

function App() {

  return (
    <div>
     <Headers/>
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
      <Route  path='/login' element={<Login />}/>
      <Route  path='/signup' element={<Signup />}/>
      <Route  path='/foodlist' element={<Foodlist />}/>
      <Route  path='/details' element={<Details />}/>
      <Route  path='/search' element={<Searchlist />}/>
     </Routes>
     <Toaster />
    </div>
  );
}

export default App;
