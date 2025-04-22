import React, { useState } from 'react';
import { IoTrashBinOutline } from 'react-icons/io5';
import { ShopUpdate } from './ShopUpdate';
import { IoMdCreate } from "react-icons/io";

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
                <a><img src="src/img/edit.png" alt="edit" /></a>
            </button>

            <button
                className="btn-delete"
                onClick={() => handleDeleteItem(item.id)}>
                <a><img src="src\img\recycle bin.png" alt="delete"/></a>
            </button>
        </li>
    );
};

export default ShopItem;