import { useContext } from 'react';
import { DataListContext } from '../contexts/dataListContext';
import {Table } from 'react-bootstrap';
import ButtonUpdate from '../component/ButtonUpdate';
import Search from '../component/Search';
import '../App.css'
import Paginacion from '../component/Paginacion';
import { Link } from 'react-router-dom';

const ModuloEmpleados = () => {
  // obtengo la lista de empleados desde el contexto
  const {busqueda, setBusqueda, results, currentPage, setCurrentPage, indexInicio,indexFinal, numPages} = useContext(DataListContext);


  return (
    <div className="py-4 mx-5">
      <h1 className='bg-primary p-2 text-center text-white fs-5 fw-bold'>Modulo Empleados</h1>
      
      <Search busqueda={busqueda} setBusqueda={setBusqueda}/>

      <Table responsive hover bordered striped size="sm" className="align-middle">
          <thead className='table-dark'>
            <tr className='bg-title-table text-white'>
              <th scope="col">#</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Codigo</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              results.slice(indexInicio,indexFinal).map((empleado,key)=>{
                return <tr key={empleado.id}>
                          <th>{empleado.id}</th>
                          <td>{empleado.nombres}</td>
                          <td>{empleado.apellidos}</td>
                          <td>{empleado.codigo}</td>
                          <td>{empleado.estado}</td>
                          <td><ButtonUpdate empleado={empleado} /></td>
                        </tr>
              })
            }
        </tbody>
      </Table>
      <Paginacion setCurrentPage={setCurrentPage} currentPage={currentPage} numPages={numPages} />

      <div className='d-flex justify-content-center border-top'>
        <Link to='/form' editar={false}>
          <button className='btn btn-success px-4 py-2 mt-4 mx-4'>
            Crear
          </button>
        </Link>

        <Link to='/reporte'>
          <button className='btn btn-warning px-4 py-2 mt-4 mx-4'>
            Reporte
          </button>
        </Link>
      </div>


    </div>  
  )
}

export default ModuloEmpleados