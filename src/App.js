import './App.css';
import { useState } from 'react';

function App() {

  const [nombre,setNombre] = useState('')
  const [apellidos,setApellidos] = useState('')
  const [cedula,setCedula] = useState(0)
  const [provincia,setProvincia] = useState('')
  const [nacimiento,setNacimiento] = useState('')
  const [email,setEmail] = useState('')
  const [observaciones,setObserv] = useState('')

  const mostrarDatos = () => { alert(nombre) }

  return (
    <div className="App">
      <div className="datos">
        <label>Nombres
          <input type="text" name="nombre"
            onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label>Apellidos
          <input type="text" name="apellidos"
            onChange={(e) => setApellidos(e.target.value)} />
        </label>
        <label>Cédula: (válida)
          <input type="number" name="cedula"
            onChange={(e) => setCedula(e.target.value)} />
        </label>
        <label>Provincia
          <input type="text" name="provincia" 
            onChange={(e) => setProvincia(e.target.value)} />
        </label>
        <label>Fecha de Nacimiento
          <input type="date" name="nacimiento" 
            onChange={(e) => setNacimiento(e.target.value)} />
        </label>
        <label>Email: (válido)
          <input type="text" name="email" 
            onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Observaciones
          <input type="text" name="observaciones" 
            onChange={(e) => setObserv(e.target.value)} />
        </label>

        <button onClick={mostrarDatos}>Guardar</button>
      </div>
    </div>
  );
}

export default App;
