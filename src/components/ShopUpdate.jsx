import React, { useRef, useState } from 'react'
import { IoCreateOutline } from "react-icons/io5";
import { useForm } from '../hooks/useForm';


export const ShopUpdate = ({item, handleUpdateItem}) => {
  
  const {updateDescription, onInputChange} = useForm({
    updateDescription: item.description
  })

  const [disabled, setDisabled] = useState(true)

  const focusInputRef = useRef()

  const onSUbmitUpdate = e => {
    e.preventDefault()
    const id = item.id
    const description = updateDescription

    handleUpdateItem(id, description)

    setDisabled(!disabled)

    focusInputRef.current.focus()
  }
  
    return (
    <form onSubmit={onSUbmitUpdate}>  
        <input 
        type="text" 
        name='updateDescription'
        className={`input-update ${item.done ? 'text-decoration-dashed' : ''}`}
        value= {updateDescription}
        onChange={onInputChange}
        readOnly={disabled}
        ref={focusInputRef}
        />
        <button className="btn-edit" type='submit'>
            <IoCreateOutline />
        </button>
    </form>
  )
}
