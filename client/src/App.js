import './App.css';
import { useState } from 'react';
import Axios from 'axios'


function App() {

  const [nombres,setNombre] = useState('')
  const [apellidos,setApellidos] = useState('')
  const [cedula,setCedula] = useState(0)
  const [provincia,setProvincia] = useState('')
  const [nacimiento,setNacimiento] = useState('')
  const [email,setEmail] = useState('')
  const [observaciones,setObserv] = useState('')
  const [foto,setFoto] = useState('')

  // necesito tener la lista de empleados en el estado
  const [empleadosList,setEmpleados] = useState([])

  // este metodo va a enviar los datos a la base de datos
  const agregar = () => {
    Axios.post("http://localhost:3001/create",{
      nombres,
      apellidos,
      cedula,
      provincia,
      nacimiento,
      email,
      observaciones,
      foto
    })
    .then(()=>{
      getEmpleados()
      alert("Empleado registrado con exito")
    })
  }

  // metodo para hacer la consulta sql de los empleados
  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados")
    .then((response)=>{
      setEmpleados(response.data)
    })
  }



  return (
    <div className="App">
      <div className="datos">
        <label>Nombres
          <input type="text" name="nombres"
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
        <label>Foto
          <input type="text" name="foto" 
            onChange={(e) => setFoto(e.target.value)} />
        </label>

        <button onClick={agregar}>Guardar</button>

        <div className='lista'>
          <button onClick={getEmpleados}>Mostrar</button>

          {
            empleadosList.map((empleado,key)=>{
              return(
                <div key={empleado.id}>
                  <p>{empleado.nombres}</p>
                  <p>{empleado.apellidos}</p>
                  <p>{empleado.cedula}</p>
                  <p>{empleado.provincia}</p>
                  <p>{empleado.f_nacimiento}</p>
                  <p>{empleado.email}</p>
                  <p>{empleado.observaciones}</p>
                  <p>{empleado.url_foto}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
