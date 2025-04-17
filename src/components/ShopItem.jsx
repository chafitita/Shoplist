import React from 'react'
import { IoTrashBinOutline } from 'react-icons/io5';
import { ShopUpdate } from './ShopUpdate';

export const ShopItem = (
    {
        item, 
        handleDeleteItem,
        handleCompleteItem,
        handleUpdateItem
        }
) => {
  return (
    <li>
        <span onClick={() => handleCompleteItem(item.id)}>
            <label htmlFor={`done-${item.id}`} className={`container-done ${item.done ? 'active' : ''}`}></label>
        </span>
        <span >
            {item.description} x {item.quantity}
        </span>

        <ShopUpdate item = {item} handleUpdateItem= {handleUpdateItem} />

        <button 
        className="btn-delete" 
        onClick={() => handleDeleteItem(item.id)}>
            <IoTrashBinOutline />
        </button>
    </li>
  )
}
export default ShopItem