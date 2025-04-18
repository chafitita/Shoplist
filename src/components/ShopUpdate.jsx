import React, { useRef, useState, useEffect } from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { useForm } from '../hooks/useForm';

export const ShopUpdate = ({ item, handleUpdateItem, onEditComplete }) => {
    const { updateDescription, onInputChange } = useForm({
        updateDescription: item.description
    });

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef(null);

    useEffect(() => {
        focusInputRef.current.focus();
        setDisabled(false);
    }, []);

    const onSubmitUpdate = (e) => {
        e.preventDefault();
        handleUpdateItem(item.id, updateDescription);
        setDisabled(true);
        onEditComplete();
    };

    const handleCancelEdit = () => {
        onEditComplete();
    };

    return (
        <form onSubmit={onSubmitUpdate}>
            <input
                type="text"
                name='updateDescription'
                className={`input-update ${item.done ? 'text-decoration-dashed' : ''}`}
                value={updateDescription}
                onChange={onInputChange}
                readOnly={disabled}
                ref={focusInputRef}
            />
            <div>
                <button type="submit" className="btn-edit">
                    <IoCreateOutline /> Guardar
                </button>
                <button type="button" onClick={handleCancelEdit} className='btn-cancel'>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default ShopUpdate;