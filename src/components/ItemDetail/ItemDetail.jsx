import { useState, useContext } from "react"
import {Link} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CarritoContext } from "../../context/CarritoContext"


const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const  {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)

    const item = {id, nombre, precio}
    agregarAlCarrito(item, cantidad)


  }

  return (
    <div className="text-center border border-indigo-600  m-12">
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: $ {precio}</h3>
      <p>ID: {id}</p>
      <p>Stock: {stock}</p>
      <p> <strong>Caracteristicas: </strong>
        El Latex para Interiores Doble Face posee aditivos de última genaración, esto hace que tengauna excelente nivelación, acabado mate y sea muy fácil de aplicar. Su rendimiento apróximado es de 10 a 12 m2 por litro y por mano, dependiendode la absorción y rugosidad de la superficie. En condiciones normales de humedad y temperatura, seca en entre 1 y 3 horas.
        Se presenta en blanco mate y puede lograrse una amplia gamade colores pastel con el agregado de entonadores universales, no agregando más de 30cc por litro de pintura.
        Se aplica facilmente con pincel, rodillo o soplete.</p>
      <img className="w-64" src={img} alt={nombre} />
      
      {
        agregarCantidad > 0 ? (<Link to={"/cart"}> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar = {manejadorCantidad}/>)
      }


    </div>
  )
}

export default ItemDetail