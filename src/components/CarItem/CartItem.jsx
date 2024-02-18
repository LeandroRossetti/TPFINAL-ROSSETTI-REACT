import React from 'react'
import { useContext } from "react";
import {CarritoContext} from "../../context/CarritoContext"

const CartItem = ({item, cantidad}) => {
  const { eliminarProducto} = useContext(CarritoContext);
  return (
    <div className='flex flex-col'>
        <h3 className='text-center font-bold'> {item.nombre} </h3>
        <p className='text-center'> Cantidad: {cantidad}</p>
        <p className='text-center'> Precio: ${item.precio}</p>
        <button className='bg-blue-200 bg-sky-700 text-white hover:text-black text-center font-bold p-2 ml-2 ' onClick={() =>  eliminarProducto(item.id) }> Eliminar Producto </button> 

    </div>
  )
}

export default CartItem