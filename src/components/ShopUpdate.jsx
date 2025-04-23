import React, { useRef, useState, useEffect } from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { useForm } from '../hooks/useForm';
import { toast } from 'react-toastify'; 

export const ShopUpdate = ({ item, handleUpdateItem, onEditComplete }) => {
    const { updateDescription, onInputChange } = useForm({
        updateDescription: item.description
    });

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef(null);

    useEffect(() => {
        focusInputRef.current.focus();
        setDisabled(updateDescription.trim().length === 0); // Deshabilita al inicio si está vacía
    }, []);

    useEffect(() => {
        setDisabled(updateDescription.trim().length === 0);
    }, [updateDescription]);

    const onSubmitUpdate = (e) => {
        e.preventDefault();
        if (updateDescription.trim().length === 0) {
            toast.error("La descripción no puede estar vacía.", {
                className: 'error-text',
                hideProgressBar: true,
                autoClose: 1500
            });
            return;
        }
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
                readOnly={false}
                ref={focusInputRef}
            />
            <div>
                <button type="submit" className="btn-edit" disabled={disabled}>
                    <IoCreateOutline /> Guardar
                </button>
                <button type="button" onClick={handleCancelEdit}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default ShopUpdate;
