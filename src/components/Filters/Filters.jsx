import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { filterPublications, getVarietals } from '../../store/actions'//eslint-disable-line
import DropDown from '../DropDown'
import TextStyle from '../TextStyle'
import { opt, provinces, types } from '../../utils/arrays'

export default function Filter () {
  const publicacions = useSelector(state => state.publicacions)
  //   const varietals = useSelector(state => state.varietals)
  const [filter, setFilter] = useState({
    opt: '',
    varietal: '',
    type: '',
    origin: ''
  })

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(filterPublications(filter))
    // dispatch(getVarietals())
  }, [filter])

  return (
    <View>
      {
      typeof (publicacions) === 'string'
        ? <TextStyle>{publicacions}</TextStyle>
        : <View style={{ display: 'flex', flexDirection: 'row' }}>
          <DropDown values={filter} onChange={setFilter} items={opt} title='Ordernar' value='opt' />
          {/* <DropDown values={filter} onChange={setFilter} items={varietals} title='Varietal' value='varietal' /> */}
          <DropDown values={filter} onChange={setFilter} items={types} title='Tipo' value='type' />
          <DropDown values={filter} onChange={setFilter} items={provinces} title='Origen' value='origin' />
        </View>//eslint-disable-line
          }
    </View>
  )
}
