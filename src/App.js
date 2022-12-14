import "./App.css";
import * as React from "react";
import NavBar from "./componentes/navBar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preguntas from "./vistas/preguntas/Preguntas";
import Home from "./vistas/home/Home";
import SaberMas from "./vistas/saberMas/SaberMas";
import Login from "./vistas/login/Login";
import Footer1 from "./componentes/footer1/Footer1";
import Estudiante from "./vistas/estudiante/Estudiante";
import PerfilEst from "./vistas/estudiante/PerfilEst";
import ClasesEst from "./vistas/estudiante/ClasesEst";
import Registro from "./vistas/registro/Registro";
import Profesor from "./vistas/profesor/Profesor";
import ClasesProfesor from "./vistas/profesor/ClasesProfesor";
import ClaseIndividualProfesor from "./vistas/profesor/ClaseIndividualProfesor";
import ClaseIndividualEstudiante from './vistas/estudiante/ClaseIndividualEstudiante';
import PerfilProf from "./vistas/profesor/PerfilProf"
import MapaActividades from './componentes/mapaActividades/MapaActividades'

//const pages = ['Saber Mas', 'Preguntas'];

function App() {

  const [usuario, setUsuario] = React.useState(null);
  const [claseIndividual, setClaseIndividual] = React.useState(null);
  const [claseIndividualEstudiante, setClaseIndividualEstudiante] = React.useState(null);

  const [sesionIniciada, setSesionIniciada] = React.useState(false);

  const sesion = (persona) => {
    setUsuario(persona)
  }


  return (
    <BrowserRouter>
      <NavBar sesionIniciada={sesionIniciada} usuario={usuario} setSesionIniciada={setSesionIniciada} /* pages={pages} */ />
      <div className="mainContenido">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Preguntas" element={<Preguntas />} />
          <Route path="/SaberMas" element={<SaberMas />} />
          <Route path="/login" element={<Login sesion={sesion} setSesionIniciada={setSesionIniciada} />} />
          <Route path="/registro" element={<Registro setSesionIniciada={setSesionIniciada} />} />
          <Route path='/Estudiante/*' element={<Estudiante data={usuario} />}>
            <Route path="Micuenta" element={<PerfilEst data={usuario} />} />
            <Route path="Clases" element={<ClasesEst data={usuario} funcionClaseIndividual={setClaseIndividualEstudiante}/>} />
            <Route path="ClaseIndividualEstudiante" element={<ClaseIndividualEstudiante data={usuario} clase={claseIndividualEstudiante}/>}/>
          </Route>
          <Route path="/MapaActividades" element={<MapaActividades data={usuario} />} />
          <Route path='/Profesor/*' element={<Profesor data={usuario} />}>
            <Route path="Micuenta" element={<PerfilProf data={usuario} />} />
            <Route path="Clases" element={<ClasesProfesor data={usuario} funcionClaseIndividual={setClaseIndividual} />} />
            <Route path="ClaseIndidivual" element={<ClaseIndividualProfesor data={usuario} clase={claseIndividual} />} />
          </Route>
          <Route path="*" element={<h1> pagina no encontrada</h1>} />
        </Routes>
      </div>
      <footer>
        <Footer1 />
      </footer>
    </BrowserRouter>
  );
}

export default App;
