import { useContext } from 'react';
import { DataListContext } from '../contexts/dataListContext';

function ButtonUpdate({empleado}) {
  const {editarEmpleado, deleteEmpleado} = useContext(DataListContext);

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-info"
        onClick={() => {
          editarEmpleado(empleado)
        }}
      >Editar</button>
      <button type="button" className="btn btn-danger" onClick={() => {
        deleteEmpleado(empleado.id, empleado.nombres)
      }}>Eliminar</button>
    </div>
  );
}

export default ButtonUpdate;