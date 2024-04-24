import { useState } from 'react';
import Axios from 'axios'
import {Container, Row, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tabStyle.css'


const DatosLab = () => {
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
    <Container className='py-4'>
        <div className="card text-center">
          <div class="card-header">
            CREAR EMPLEADO NUEVO
          </div>

          <Tabs defaultActiveKey="tab-1" className='mb-1 p-0'>
            <Tab eventKey="tab-1" title="Datos Personales">
              <div className='card-body'>
                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1">Nombres</span>
                  <input type="text" name="nombres"
                  className="form-control" placeholder="Nombres" aria-label="Nombres" aria-describedby="basic-addon1"
                    onChange={(e) => setNombre(e.target.value)}
                  />

                  <span className="input-group-text" id="basic-addon1">Apellidos</span>
                  <input type="text" name="apellidos"
                  className="form-control" placeholder="Apellidos" aria-label="Apellidos" aria-describedby="basic-addon1"
                  onChange={(e) => setApellidos(e.target.value)}
                  />
                </div>


                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1">Cédula</span>
                  <input type="number" name="cedula"
                  className="form-control" placeholder="Cédula válida" aria-label="Cedula" aria-describedby="basic-addon1"
                  onChange={(e) => setCedula(e.target.value)}
                  />

                  <span className="input-group-text" id="basic-addon1">Provincia</span>
                  <input type="text" name="provincia"
                  className="form-control" placeholder="Provincia" aria-label="Provincia" aria-describedby="basic-addon1"
                  onChange={(e) => setProvincia(e.target.value)}
                  />
                </div>



                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1">Fecha de Nacimiento</span>
                  <input type="date" name="nacimiento"
                  className="form-control" aria-describedby="basic-addon1"
                  onChange={(e) => setNacimiento(e.target.value)}
                  />

                  <span className="input-group-text" id="basic-addon1">Email</span>
                  <input type="email" name="provincia"
                  className="form-control" placeholder="Debe ser válido" aria-label="Email" aria-describedby="basic-addon1"
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                
                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1">Observaciones</span>
                  <input type="text" name="observaciones"
                  className="form-control" placeholder="Ingrese un comentario del empleado" aria-label="observaciones" aria-describedby="basic-addon1"
                  onChange={(e) => setObserv(e.target.value)}
                  />

                  <span className="input-group-text" id="basic-addon1">Foto</span>
                  <input type="text" name="foto"
                  className="form-control" placeholder="Debe ser válido" aria-label="Foto" aria-describedby="basic-addon1"
                  onChange={(e) => setFoto(e.target.value)}
                  />
                </div>
              </div> 
            </Tab>


            <Tab eventKey="tab-2" title="Datos Laborales">
              <div className='card-body'>
                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1">Feche Ingreso</span>
                  <input type="date" name="ingreso"
                  className="form-control" placeholder="Nombres" aria-label="Nombres" aria-describedby="basic-addon1"
                    onChange={(e) => setNombre(e.target.value)}
                  />

                  <span className="input-group-text" id="basic-addon1">Cargo</span>
                  <input type="text" name="cargo"
                  className="form-control" placeholder="Cardo del empleado" aria-label="Cargo" aria-describedby="basic-addon1"
                  onChange={(e) => setApellidos(e.target.value)}
                  />
                </div>
              </div> 
            </Tab>
          </Tabs>


          <div className='card-footer text-body-secondary'>
            <button className='btn btn-success' onClick={agregar}>Guardar</button>
            <button onClick={getEmpleados}>Mostrar</button>
          </div>

        </div>
    

      <div className='lista'>
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
    </Container>  
  );
}

export default DatosLab