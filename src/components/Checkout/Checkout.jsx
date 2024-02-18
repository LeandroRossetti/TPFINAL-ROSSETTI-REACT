import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefonoo] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault()
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Favor de completar todos los campos!")
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los emails son distintos")
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden de compra: ", error);
                setError("No se pudo crear la orden, hable con el administrador.")
            })

    }

    return (
        <div>

            <h2 className="text-center py-6 text-2xl">Checkout</h2>
            <form onSubmit={manejadorSubmit}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p className="text-center"> {producto.item.nombre} Cantidad x {producto.cantidad} </p>
                            <p className="text-center"> ${producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }

                <div className="flex flex-col p-4 text-2xl ">
                    <div className="w-1" >
                        <label  htmlFor="nombre">Nombre</label>
                        <input className="border-2 border-rose-600" type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="w-1">
                        <label htmlFor="apellido">Apellido</label>
                        <input className="border-2 border-rose-600" type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
                    </div>

                    <div className="w-1">
                        <label htmlFor="telefono">Telefono</label>
                        <input className="border-2 border-rose-600" type="number" id="telefono" onChange={(e) => setTelefonoo(e.target.value)} />
                    </div>

                    <div className="w-1">
                        <label htmlFor="email">Email</label>
                        <input className="border-2 border-rose-600" type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="w-1">
                        <label htmlFor="emailc">Email confirmar</label>
                        <input className="border-2 border-rose-600" type="email" id="emailc" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>

                </div>

                {
                    error && <p className="text-red-600">  {error}</p>
                }
                <button className="bg-blue-200 bg-sky-700 text-white hover:text-black text-center font-bold p-4 ml-4 " disabled={carrito.length === 0}> Realizar orden </button>

                {
                    ordenId && <strong> Gracias por su compra! tu nro de orden es : {ordenId} </strong>
                }

            </form>
        </div>
    )
}

export default Checkout