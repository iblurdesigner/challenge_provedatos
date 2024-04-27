import React from 'react'

const Search = ({busqueda, setBusqueda}) => {

  // funcion de busqueda
  const searcher = (e) => {
    // e.preventDefault()
    setBusqueda(e.target.value)
  }

  return (
    <div className='my-4 text-right'>
      <input value={busqueda} type="text" className="form-control border border-primary shadow-lg" placeholder="Buscar por nombre o por código de empleado..."
        onChange={searcher}
      />
    </div>
  )
}

export default Search