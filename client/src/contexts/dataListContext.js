import { createContext, useEffect, useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2'

export const DataListContext = createContext()

export function DataContextProvider(props) {
  const [editar,setEditar] = useState(false)
  
  // necesito tener la lista de empleados en el estado, para ello creamos un useEffect y hacemos el fetch
  const [empleadosList,setEmpleados] = useState([])
  
  const [id,setId] = useState('')
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

  // estado para el filtrado de empleados
  const [busqueda,setBusqueda] = useState('')


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
      limpiarCampos()
      Swal.fire({
        title: '<strong>Registro exitoso!</strong>',
        html:"<i>El empleado <strong>" + nombres + "</strong> fue registrado con éxito!!!</i>",
        icon: 'success',
        timer: 3000
      })
    }).catch((error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se logró registrar el empleado',
        footer: JSON.parse(JSON.stringify(error)).message==="Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
      })
    })
  }

  // este metodo va a actualizar los datos de la base de datos
  const update = () => {
    Axios.put("http://localhost:3001/update",{
      id,
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
      getEmpleados()
      Swal.fire({
        title: '<strong>Registro actualizado</strong>',
        html:"<i>El empleado <strong>" + nombres + "</strong> fue actualizado con éxito!!!</i>",
        icon: 'success',
        timer: 3000
      })
      limpiarCampos()
    }).catch((error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se logró actualizar el empleado',
        footer: JSON.parse(JSON.stringify(error)).message==="Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
      })
    })
  }

  // con este metodo eliminamos
  const deleteEmpleado = (id, nombres) => {
    Swal.fire({
      title: '<strong>Confimar la eliminación</strong>',
      html:"<i>Realmente desea eliminar el empleado <strong>" + nombres + "</strong>?</i>",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then(result => {
      if(result.isConfirmed){
        Axios.delete(`http://localhost:3001/delete/${id}`)
        .then(()=>{
          getEmpleados()
          limpiarCampos()
          Swal.fire(
            'Eliminado!',
            nombres + ' ha sido eliminado.',
            'success'
          )
        }).catch((error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se logró eliminar el empleado',
            footer: JSON.parse(JSON.stringify(error)).message==="Network Error" ? "Intente más tarde" : JSON.parse(JSON.stringify(error)).message
          })
        })
      }
    })

  }

  const limpiarCampos = () =>{
    setNombre('')
    setApellidos('')
    setCedula(0)
    setProvincia('')
    setNacimiento('')
    setEmail('')
    setObserv('')
    setFoto('')
    setIngreso('')
    setCargo('')
    setDepar('')
    setProviLab('')
    setSueldo('')
    setJornada('')
    setObservLab('')

    setEditar(false)
  }

  // este metodo va a traer los datos a editar para mostrarlos en el formulario
  const editarEmpleado = (val) => {
    setEditar(true)
    
    setId(val.id)
    setNombre(val.nombres)
    setApellidos(val.apellidos)
    setCedula(val.cedula)
    setProvincia(val.provincia)
    setNacimiento(val.nacimiento)
    setEmail(val.email)
    setObserv(val.observaciones)
    setFoto(val.foto)
    setIngreso(val.ingreso)
    setCargo(val.cargo)
    setDepar(val.departamento)
    setProviLab(val.provilab)
    setSueldo(val.sueldo)
    setJornada(val.jornada)
    setObservLab(val.observlab)
  }

  
  // metodo para hacer la consulta sql de los empleados
  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados")
    .then((response)=>{
      setEmpleados(response.data)
    })
  }


  // este hook trae los datos en el primer render, desde el endpoint creado con node
  useEffect(() => {
    getEmpleados()
  }, [])


  // metodo de filtrado
  let results = []

  if(!busqueda){
    results = empleadosList
  }else{
    results = empleadosList.filter((val)=>{
      if(val.nombres.toLowerCase().includes(busqueda.toLowerCase()) || val.apellidos.toLowerCase().includes(busqueda.toLowerCase()) || val.cedula.toString().includes(busqueda) ){
        return val
      }
    })
  }
  
  
  // esta constante pasamos todos los datos del estado global
  const valor = {
    agregar,
    update,
    deleteEmpleado,
    limpiarCampos,
    editarEmpleado,
    empleadosList,
    getEmpleados,
    setEmpleados,
    setNombre,
    setApellidos,setCedula, setProvincia, setNacimiento, setEmail, setObserv, setFoto, setIngreso, setCargo, setDepar, setProviLab, setSueldo, setJornada, setObservLab,
    editar,
    setEditar,
    id,
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
    observLab,
    busqueda,
    setBusqueda,
    results
  }
  return (
    <DataListContext.Provider value={valor}>
      {props.children}
    </DataListContext.Provider>
  )
}