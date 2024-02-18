import { Link } from "react-router-dom";
import CartItem from "../CarItem/CartItem";
import {CarritoContext} from "../../context/CarritoContext"
import { useContext } from "react";

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if(cantidadTotal === 0){
        return(
            <>
                <h2> No hay productos en el carrito </h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }
  return (
    <div>
        
        {    
             carrito.map(prod => <CartItem  key={prod.id} {...prod} />)  
           
        }

        <h3 className="text-blue-800 text-center font-bold"> Total: ${total} </h3>
        
        <button className="bg-red-800 text-white hover:text-black text-center font-bold p-2 ml-2" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
        <Link className="bg-green-800 text-white font-bold p-2 ml-2 hover:text-black" to="/checkout"> Finalizar Compra </Link>
        
    </div>
  )
}

export default Cart