import { useContext } from 'react';
import { DataListContext } from '../contexts/dataListContext';

const ListaEmpleados = () => {
  // obtengo la lista de empleados desde el contexto
  const {empleadosList} = useContext(DataListContext);

  return (
    <div className="py-4 mx-5">
      <table class="table table-striped">
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
                <p>{empleado.ingreso}</p>
                <p>{empleado.cargo}</p>
                <p>{empleado.departamento}</p>
                <p>{empleado.provilab}</p>
                <p>{empleado.sueldo}</p>
                <p>{empleado.jornada}</p>
                <p>{empleado.observlab}</p>
              </div>
            )
          })
        }
      </div>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>  
  )
}

export default ListaEmpleados