import { useContext, useState } from 'react';
import { DataListContext } from '../contexts/dataListContext';
import {Container, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const DatosLab = () => {
  const {getEmpleados} = useContext(DataListContext);

  const [nombres,setNombre] = useState('')
  const [apellidos,setApellidos] = useState('')
  const [cedula,setCedula] = useState(0)
  const [provincia,setProvincia] = useState('')
  const [nacimiento,setNacimiento] = useState('')
  const [email,setEmail] = useState('')
  const [observaciones,setObserv] = useState('')
  const [foto,setFoto] = useState('')
  const [ingreso,setIngreso] = useState('')
  const [cargo,setCargo] = useState('')
  const [departamento,setDepar] = useState('')
  const [proviLab,setProviLab] = useState('')
  const [sueldo,setSueldo] = useState('')
  const [jornada,setJornada] = useState('')
  const [observLab,setObservLab] = useState('')

  

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
      foto,
      ingreso,
      cargo,
      departamento,
      proviLab,
      sueldo,
      jornada,
      observLab
    })
    .then(()=>{
      alert("Empleado registrado con exito")
    })
  }


  return (
    <Container className='py-4'>
        <div className="card text-center">
          <div className="card-header">
            CREAR EMPLEADO NUEVO
          </div>

          <Tabs defaultActiveKey="tab-1" className='mb-1 p-0'>
            <Tab eventKey="tab-1" title="Datos Personales">
              <div className='card-body'>
                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1">Nombres</span>
                  <input type="text" name="nombres"
                  className="form-control" placeholder="Dos nombres" aria-label="Nombres" aria-describedby="basic-addon1"
                    onChange={(e) => setNombre(e.target.value)}
                  />

                  <span className="input-group-text" id="basic-addon1">Apellidos</span>
                  <input type="text" name="apellidos"
                  className="form-control" placeholder="Dos apellidos" aria-label="Apellidos" aria-describedby="basic-addon1"
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

                  <span className="input-group-text" id="basic-addon1">Email (válido)</span>
                  <input type="email" name="provincia"
                  className="form-control" placeholder="correo-personal@email.com" aria-label="Email" aria-describedby="basic-addon1"
                  onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                
                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1">Observaciones</span>
                  <textarea className="form-control" aria-label="With textarea" name="observaciones" placeholder="Comentario u observación referente a la FICHA PERSONAL"
                  onChange={(e) => setObserv(e.target.value)} > 
                  </textarea>

                  <div className="input-group mt-3">
                    <label className="input-group-text" for="inputGroupFile01">Fotografía</label>
                    <input type="file" className="form-control" id="inputGroupFile01"
                    onClick={(e) => setFoto(e.target.value)} />
                  </div>
                </div>
              </div> 
            </Tab>


            <Tab eventKey="tab-2" title="Datos Laborales">
              <div className='card-body'>
                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1">Fecha de Ingreso</span>
                  <input type="date" name="ingreso"
                  className="form-control" placeholder="Nombres" aria-label="Nombres" aria-describedby="basic-addon1"
                    onChange={(e) => setIngreso(e.target.value)}
                  />

                  <span className="input-group-text" id="basic-addon1">Cargo</span>
                  <input type="text" name="cargo"
                  className="form-control" placeholder="Cargo del empleado" aria-label="Cargo" aria-describedby="basic-addon1"
                  onChange={(e) => setCargo(e.target.value)}
                  />
                </div>

                <div className='input-group mb-3'>
                  <span className="input-group-text" id="basic-addon1">Departamento</span>
                  <input type="text" name="departamento"
                  className="form-control" placeholder="Ingrese el departamento" aria-label="departamento" aria-describedby="basic-addon1"
                  onChange={(e) => setDepar(e.target.value)}
                  />

                  <span className="input-group-text" id="basic-addon1">Provincia</span>
                  <input type="text" name="provincia"
                  className="form-control" placeholder="Provincia" aria-label="Provincia" aria-describedby="basic-addon1"
                  onChange={(e) => setProviLab(e.target.value)}
                  />
                </div>


                <div className='row align-items-start'>
                  <div className='col'>
                    <div className='d-flex flex-row'> 
                      <span className="input-group-text">Sueldo</span>
                      <input type="number" name="sueldo"
                      className="form-control w-100" placeholder="0000.00" aria-label="sueldo"
                      onChange={(e) => setSueldo(e.target.value)}
                      />
                      <span className="input-group-text w-auto">USD</span>
                    </div>
                  </div>

                  <div className='col w-50'>
                    <div className="text-start w-100" id="basic-addon1">Jornada Parcial</div>
                    <div className='form-check text-start w-100'>
                      <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                      onClick={(e) => setJornada(e.target.value='Parcial')} />
                      <label className="form-check-label" for="flexRadioDefault1">
                        Si
                      </label>
                    </div>
                    <div className='form-check text-start w-100' >
                      <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                      onClick={(e) => setJornada(e.target.value='Completa')} />
                      <label className="form-check-label" for="flexRadioDefault2">
                        No
                      </label>
                    </div>
                  </div>
                </div>


                <div className='input-group'>
                  <span className="input-group-text" id="basic-addon1">Observaciones</span>
                  <textarea className="form-control" aria-label="With textarea" name="observaciones" placeholder="Comentario u observación referente a la FICHA LABORAL"
                   onChange={(e) => setObservLab(e.target.value)}></textarea>
                </div>

              </div> 
            </Tab>
          </Tabs>


          <div className='card-footer text-body-secondary'>
            <button className='btn btn-success' onClick={agregar}>Guardar</button>
            <button onClick={getEmpleados}>Reporte</button>
          </div>

        </div>
    

      
    </Container>  
  );
}

export default DatosLab