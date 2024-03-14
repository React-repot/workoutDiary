import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import style from '../styles/style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

function Item({type, label, selected, setSelected}){

    const color = type === selected ? '#33adff7e' : 'white'

    return(
        <Pressable onPress={() => setSelected(type)}>
            <View style={[style.textitem, {backgroundColor: color}]}>
                <MaterialCommunityIcons name={type} size={24}/>
                <Text>{label}</Text>
            </View>
        </Pressable>
    )
}

export default function TypeSelector({ selectionChanged }) {

    const [selected, setSelected] = useState('run')

    const setSelection = (type) => {
        selectionChanged(type)
        setSelected(type)
    }

    return (
        <View style={style.type}>
            <Item id={0} type='run' label='Run' selected={selected} setSelected={setSelection} />
            <Item id={1} type='ski' label='Ski' selected={selected} setSelected={setSelection} />
            <Item id={2} type='swim' label='Swim' selected={selected} setSelected={setSelection} />
        </View>
    )
}