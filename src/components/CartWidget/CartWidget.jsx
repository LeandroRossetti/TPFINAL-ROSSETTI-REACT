import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className=''>
      <Link to="/cart">
        <img className='w-20 cursor-pointer rounded-full' src="src\assets\carrito.png" alt="Carrito" />
        {
          cantidadTotal > 0 && <div className="text-2xl text-center text-white"> {cantidadTotal} </div>
        }
      </Link>
    </div>
  )
}

export default CartWidget