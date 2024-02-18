import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="bg-gray-200 rounded-lg  p-2 m-4 flex flex-col">
      {/* <div> */}
      <img className='w-64 h-56' src={img} alt={nombre} />
      {/* <img src={img} alt={nombre}></img> */}
      <h3>Nombre: {nombre}</h3>
      <p>Codigo: {id}</p>
      <p>Precio: ${precio}</p>
      <strong>Cantidad disponible: {stock}</strong>
      <Link className="p-2 bg-blue-200 hover:bg-sky-700 hover:text-white text-center font-bold " to={`/item/${id}`}> Ver Detalles</Link>
    </div>
  )
}

export default Item