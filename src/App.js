import './App.css';
import Nav1 from './components/Navbar';
import Main from './components/Main'
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Abastecimiento from './components/Abastecimiento';
import Colaborar from './components/Colaborar';
import Contacto from './components/Contacto';
import Logros from './components/Logros';
import Foodtruck from './components/Foodtruck';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div>
    <Nav1/>
    <Main/>
    <Nosotros/>
    <Logros/>
    <Galeria/>
    <Foodtruck/>
    <Abastecimiento/>
    <Colaborar/>
    <Sponsors/>
    <Contacto/>
    </div>
  );
}

export default App;