import './css/app.css'
import { ShopList }  from './components/ShopList'
import { ShopAdd }   from './components/ShopAdd'
import { useItem } from './hooks/useItem'

export function App(){

    const { 
        items,
        itemCount,
        handleNewItem,
        handleDeleteItem,
        handleCompleteItem,
        handleUpdateItem 
    } = useItem()

    return(
        <>
        <div className="container">
            <div className="shop-card">
                <h1 className='foro-titulo'>Lista de compras</h1>
                <div className="item-count">
                    <h3>N° de compras: {itemCount}</h3>
                </div>
                <div className="add-item">
                    <h3>Agregar item</h3>
                    <ShopAdd handleNewItem={handleNewItem}/>
                </div>
                <ShopList
                    items={items}
                    handleCompleteItem={handleCompleteItem}
                    handleDeleteItem={handleDeleteItem}
                    handleUpdateItem={handleUpdateItem}
                />
            </div>
        </div>
        </>
    )
}
