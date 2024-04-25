import { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const DataListContext = createContext()

export function DataContextProvider(props) {
  // necesito tener la lista de empleados en el estado
  const [empleadosList,setEmpleados] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/empleados")
    .then((response)=>{
      setEmpleados(response.data)
    })
  }, [])
  
  // metodo para hacer la consulta sql de los empleados
  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados")
    .then((response)=>{
      setEmpleados(response.data)
    })
  }

  const valor = {
    empleadosList,
    setEmpleados,
    getEmpleados
  }
  return (
    <DataListContext.Provider value={valor}>
      {props.children}
    </DataListContext.Provider>
  )
}