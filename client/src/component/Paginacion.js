import React from 'react'

const Paginacion = ({currentPage, setCurrentPage, numPages}) => {
  const next = () => {
    if(currentPage !== numPages) setCurrentPage(currentPage + 1)
  }
  const prev = () => {
    if(currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className='container d-flex align-items-center my-2'>
      <button className='btn btn-info mx-5' onClick={prev}>Anterior</button>
      <h1 className='fs-6 mx-2'>Página {currentPage} / {numPages} </h1>
      <button className='btn btn-info mx-5' onClick={next}>Siguiente</button>
    </div>
  )
}

export default Paginacion