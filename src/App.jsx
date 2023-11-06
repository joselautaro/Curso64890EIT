import './App.css'
import { Clase2 } from './components/Clase2/Clase2';
import { Clase2Bis } from './components/Clase2Bis/Clase2Bis';
import { Clase3 } from './components/Clase3/Clase3';
import { Clase4 } from './components/Clase4/Clase4';
import { Clase5 } from './components/Clase5/Clase5';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  return (
    <>
    {/* Toda una app en react, para poder darle rutas debemos 
      envolverla en fragment llamada router, seguido por routes, finalizado por route
    */}
      <Router>
          <NavBar/>
        <Routes>
          <Route exact path='/' element={<Clase5/>}/>
          <Route exact path='/dos' element={<Clase2/>}/>
          <Route exact path='/dos-bis' element={<Clase2Bis/>}/>
          <Route exact path='/tres' element={<Clase3/>}/>
          <Route exact path='/cuatro' element={<Clase4/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
