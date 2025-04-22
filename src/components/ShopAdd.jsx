import React from 'react'
import { useForm } from '../hooks/useForm'

export const ShopAdd = ({handleNewItem}) => {

  const {description, quantity, onInputChange, onResetForm} = useForm({
    description: '', quantity : 1
    })

  const onFormSubmit = e => {
    e.preventDefault()

    if(description.length <= 1 || quantity <= 0) return 

    let newItem = {
      id: new Date().getTime(),
      description: description,
      quantity: parseInt(quantity),
      done: false,
    }

    handleNewItem(newItem)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type="text" 
        name="description" 
        className='input-add' 
        value={description}
        onChange={onInputChange}
        placeholder='¿Que vas a comprar hoy?'
        />
        <input
        type="number"
        name="quantity"
        className="input-add"
        value={quantity}
        onChange={onInputChange}
        placeholder="Cantidad"
        />
        <button className="btn-add" type='submit'>
            <a><img src="src\img\agregar btn.jpg" alt="agregar" /></a>
        </button>
    </form>
  )
}
export default ShopAdd
