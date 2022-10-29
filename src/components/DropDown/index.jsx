import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

export default function DropDown ({ items, onChange, values, title, value, style }) {
  // items = [{ name: 'item1', id: 1 }, { name: 'item2', id: 2 }] // array de objetos con nombre e id de los items del dropdown
  // onChange = funcion que se ejecuta cuando cambia un select
  // values = valores del formulario que se estan modificando con el dropdown (usado para setear el valor del select)
  // title = titulo del dropdown (usado para el 1er label del select)
  // value = nombre del campo del formulario que se esta modificando con el dropdown (usado para setear el valor del objeto)
  // style = estilos del dropdown (usado para modificar el estilo del dropdown)
  const [selectProduct, setSelectProduct] = useState()
  return (
    <Picker
      selectedValue={selectProduct} onValueChange={(itemValue, itemIndex) => {
        setSelectProduct(itemValue)
        onChange({ ...values, [value]: itemValue })
      }} mode='dropdown' style={{ height: 50, width: 150, ...style }}
    ><Picker label={title} value='' />
      {items?.map((item, i) => <Picker.Item key={i} label={item.name} value={item.id} />)}
    </Picker>
  )
}
