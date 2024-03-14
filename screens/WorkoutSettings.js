import { View, Text } from 'react-native'
import React, { useContext, useMemo, useState } from 'react'
import { RadioGroup } from 'react-native-radio-buttons-group'
import style from '../styles/style'
import { UnitContext } from '../data/Contexts'

export default function WorkoutSettings() {

  const {units} = useContext(UnitContext)
  const {setUnits} = useContext(UnitContext)

  const radioButtons = useMemo(() => ([
    {
      id: '1',
      label: 'Kilometres (km)',
      value: 'km'
    },
    {
      id: '2',
      label: 'Miles (mi)',
      value: 'mi'
    },
  ]), [])

  return (
    <View style={style.radioContainer}>
      <Text style={style.radioLabel}>Select units</Text>
      <RadioGroup 
        containerStyle={style.radioButtons}
        radioButtons={radioButtons}
        onPress={setUnits}
        selectedId={units}
      />
    </View>
  )
}