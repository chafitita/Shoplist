import React from 'react'
import { useForm } from '../hooks/useForm'
import agregarIcon from '../assets/agregar-btn.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/shopadd.css'

export const ShopAdd = ({handleNewItem}) => {

  const {description, quantity, onInputChange, onResetForm} = useForm({
    description: '', quantity : 1
    })

  const onFormSubmit = e => {
    e.preventDefault()

    if(description.length <= 1){
      toast.error("Escribe algo!!",{
        className: 'error-text',
        hideProgressBar: true,
        autoClose: 1500})
      return;
    }

    if(quantity == 0) {
      toast.warning("La cantidad no puede ser nula.",{
        className: 'warning-nulidad',
        hideProgressBar: true,
        autoClose: 1250});
      return;
    }

    if(quantity < 0){
      toast.warning("La cantidad no puede ser negativa.",{
        className: 'warning-menor',
        hideProgressBar: true,
        autoClose: 1250})
      return;
    }

    if(quantity >= 1000) {
      toast.warning("La cantidad excede el límite de 1000.", {
        className: 'error-cantidad',
        hideProgressBar: true,
        autoClose: 1250});
      return;
    }

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
    <>
      <ToastContainer />
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
              <img src={agregarIcon} alt="agregar" />
          </button>
      </form>
    </>
    
  )
}
export default ShopAdd
