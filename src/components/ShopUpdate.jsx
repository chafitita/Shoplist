import React, { useRef, useState, useEffect } from 'react';
import cancelIcon from '../assets/cancel-btn.jpg'
import okIcon from '../assets/ok-btn.jpg'
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
        setDisabled(updateDescription.trim().length === 0);
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
                    <img src={okIcon} alt="ok" />
                </button>
                <button type="button" onClick={handleCancelEdit} className='btn-cancel'>
                    <img src={cancelIcon} alt="cancelar" />
                </button>
            </div>
        </form>
    );
};

export default ShopUpdate;
