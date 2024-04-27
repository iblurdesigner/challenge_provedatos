import { useContext } from 'react';
import { DataListContext } from '../contexts/dataListContext';
import { Table } from 'react-bootstrap';
import ButtonUpdate from './ButtonUpdate';
import Search from './Search';
import '../App.css'

const ListaEmpleados = () => {
  // obtengo la lista de empleados desde el contexto
  const {empleadosList, busqueda, setBusqueda, results} = useContext(DataListContext);


  return (
    <div className="py-4 mx-5">
      <h1 className='bg-primary p-2 text-center text-white fs-5 fw-bold'>Modulo Empleados</h1>
      
      <Search busqueda={busqueda} setBusqueda={setBusqueda}/>

      <Table responsive className="table table-striped table-hover shadow-lg">
          <thead>
            <tr className='bg-title-table text-white'>
              <th scope="col">#</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Cédula</th>
              <th scope="col">Provincia</th>
              <th scope="col">Fecha de Nacimiento</th>
              <th scope="col">E-mail</th>
              <th scope="col">Observaciones Personales</th>
              <th scope="col">Fecha de Ingreso</th>
              <th scope="col">Cargo</th>
              <th scope="col">Departamento</th>
              <th scope="col">Provincia laboral</th>
              <th scope="col">Sueldo</th>
              <th scope="col">Jornada</th>
              <th scope="col">Observaciones Laborales</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              results.map((empleado,key)=>{
                return <tr key={empleado.id}>
                          <th>{empleado.id}</th>
                          <td>{empleado.nombres}</td>
                          <td>{empleado.apellidos}</td>
                          <td>{empleado.cedula}</td>
                          <td>{empleado.provincia}</td>
                          <td>{empleado.f_nacimiento}</td>
                          <td>{empleado.email}</td>
                          <td>{empleado.observaciones}</td>
                          <td>{empleado.ingreso}</td>
                          <td>{empleado.cargo}</td>
                          <td>{empleado.departamento}</td>
                          <td>{empleado.provilab}</td>
                          <td>{empleado.sueldo}</td>
                          <td>{empleado.jornada}</td>
                          <td>{empleado.observlab}</td>
                          <td><ButtonUpdate empleado={empleado} /></td>
                        </tr>
              })
            }          
        </tbody>
      </Table>
    </div>  
  )
}

export default ListaEmpleados