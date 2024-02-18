import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className='flex flex-wrap gap-4 place-content-around bg-white'>
        {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList