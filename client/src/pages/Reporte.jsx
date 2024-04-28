import { useContext, useEffect } from 'react';
import { DataListContext } from '../contexts/dataListContext';
import {Table } from 'react-bootstrap';
import '../App.css'
import { Link } from 'react-router-dom';

const Reporte = () => {
  const {results, getEmpleados} = useContext(DataListContext);
    // este hook trae los datos en el primer render, desde el endpoint creado con node
    useEffect(() => {
      getEmpleados()
    }, [])

  return (
    <div className="py-4 mx-5">
      <h1 className='bg-primary p-2 text-center text-white fs-5 fw-bold'>Reporte</h1>

      <Table responsive hover bordered striped size="sm" className="align-middle">
          <thead className='table-dark'>
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
              <th scope="col">Codigo</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {
              results.map((empleado,key)=>{
                const naci = new Date(empleado.f_nacimiento)
                const fnaci =naci.toLocaleDateString("es-MX")
                const ingre = new Date(empleado.ingreso)
                const fingreso = ingre.toLocaleDateString("es-MX")
                return <tr key={empleado.id}>
                          <th>{empleado.id}</th>
                          <td>{empleado.nombres}</td>
                          <td>{empleado.apellidos}</td>
                          <td>{empleado.cedula}</td>
                          <td>{empleado.provincia}</td>
                          <td>{fnaci}</td>
                          <td>{empleado.email}</td>
                          <td>{empleado.observaciones}</td>
                          <td>{fingreso}</td>
                          <td>{empleado.cargo}</td>
                          <td>{empleado.departamento}</td>
                          <td>{empleado.provilab}</td>
                          <td>{empleado.sueldo}</td>
                          <td>{empleado.jornada}</td>
                          <td>{empleado.observlab}</td>
                          <td>{empleado.codigo}</td>
                          <td>{empleado.estado}</td>
                        </tr>
              })
            }
        </tbody>
      </Table>

      <div className='d-flex justify-content-center'>
        <Link to='/'>
          <button className='btn btn-warning px-4 py-2 mt-4 mx-4'>
            Salir
          </button>
        </Link>
      </div>


    </div>  
  )
}

export default Reporte