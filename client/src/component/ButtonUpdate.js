import { useContext } from 'react';
import { DataListContext } from '../contexts/dataListContext';

function ButtonUpdate({empleado}) {
  const {editarEmpleado} = useContext(DataListContext);

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-info"
        onClick={() => {
          editarEmpleado(empleado)
        }}
      >Editar</button>
      <button type="button" className="btn btn-danger">Eliminar</button>
    </div>
  );
}

export default ButtonUpdate;