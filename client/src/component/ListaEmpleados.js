import { useContext } from 'react';
import { DataListContext } from '../contexts/dataListContext';
import { Table } from 'react-bootstrap';

const ListaEmpleados = () => {
  // obtengo la lista de empleados desde el contexto
  const {empleadosList} = useContext(DataListContext);

  return (
    <div className="py-4 mx-5">
      <Table className="table table-striped">
          <thead>
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {
              empleadosList.map((empleado,key)=>{
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
                        </tr>
              })
            }          
        </tbody>
      </Table>
    </div>  
  )
}

export default ListaEmpleados