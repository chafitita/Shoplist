import React, { useState } from 'react';
import { ShopUpdate } from './ShopUpdate';
import pencilIcon from '../assets/edit.png'
import recycleIcon from '../assets/recycle-bin.png'

export const ShopItem = (
    {
        item,
        handleDeleteItem,
        handleCompleteItem,
        handleUpdateItem
    }
) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <li>
            <span onClick={() => handleCompleteItem(item.id)}>
                <label htmlFor={`done-${item.id}`} className={`container-done ${item.done ? 'active' : ''}`}></label>
            </span>
            {isEditing ? (
                <ShopUpdate item={item} handleUpdateItem={handleUpdateItem} onEditComplete={() => setIsEditing(false)} />
            ) : (
                <span className={item.done ? 'text-decoration-dashed' : ''}>
                    {item.description} x {item.quantity}
                </span>
            )}

            <button onClick={() => setIsEditing(true)} className='pencil-btn'>
                <img src={pencilIcon} alt="edit" />
            </button>

            <button
                className="btn-delete"
                onClick={() => handleDeleteItem(item.id)}>
                <img src={recycleIcon} alt="delete"/>
            </button>
        </li>
    );
};

export default ShopItem;