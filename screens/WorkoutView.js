import { View, Text, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import style from '../styles/style'
import { UnitContext, WorkoutContext } from '../data/Contexts'

export default function WorkoutView() {

  const {data} = useContext(WorkoutContext)
  const {units} = useContext(UnitContext)

  const calculateTotal = (type) => {
    let total = 0

    for (let i = 0; i < data.length; i++) {
      if (data[i].type === type) {
        total = total + Number(data[i].distance)
      }
    }

    return (
      <Text>{units === '1' ? total : (total * 0.621).toFixed(2)}{units === '1' ? 'km' : 'mi'}</Text>
    )
  }
  
  return (
    <View style={styles.container}>
      <Text style={style.totals}>Totals</Text>
      <View style={style.totalsContainer}>
        <View style={style.totalsItem}>
          <MaterialCommunityIcons name='run' size={40}/>
          {calculateTotal('run')}
        </View>
        
        <View style={style.totalsItem}>
          <MaterialCommunityIcons name='ski' size={40}/>
          {calculateTotal('ski')}
        </View>

        <View style={style.totalsItem}>
          <MaterialCommunityIcons name='swim' size={40}/>
          {calculateTotal('swim')}
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => 
        <View style={style.listView}>
          <View style={style.listTitle}>
            <MaterialCommunityIcons name={item.type} size={24}/>
            <Text>{item.date.day}.{item.date.month}.{item.date.year}</Text>
          </View>

          <View style={style.listDetails}>
            <Text>Distance: {units === '1' ? item.distance : (item.distance * 0.621).toFixed(2)} {units === '1' ? 'kilometres' : 'miles'}</Text>
            <Text>Duration: {item.duration} minutes</Text>
          </View>
        </View>
      } 
      />
    </View>
  )
}