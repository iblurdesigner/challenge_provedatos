import '../App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ModuloEmpleados from '../pages/ModuloEmpleados';
import DatosLab from '../pages/DatosLab';
import Reporte from '../pages/Reporte';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModuloEmpleados />} />
        <Route path="/form" element={<DatosLab />} />
        <Route path="/reporte" element={<Reporte />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;