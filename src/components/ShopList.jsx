import React from 'react'
import ShopItem from './ShopItem'

export const ShopList = (
  {
    items, 
    handleDeleteItem,
    handleCompleteItem,
    handleUpdateItem
  }
) => {
  return (
    <ul>
      {items.map(item => (
        <ShopItem
        key={item.id}
        item={item}
        handleCompleteItem={handleCompleteItem}
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
      />
      ))}
    </ul>
  )
}
export default ShopList
