import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Jugador } from './components/Jugador';
import { Listadojugadores } from './components/Listadojugadores';
//import { Modal } from './components/Modal';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
    
          <Route path='/' element={<Jugador/>}></Route>
          <Route path='/listado' element={<Listadojugadores/>}></Route>

        </Routes>
      </BrowserRouter>
      <div className="container">
        <div className="row">
          
           
        </div>
      </div>
    </>
  );
};


export default App;
