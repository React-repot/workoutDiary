import { View, Text, Pressable, TextInput, Modal, Alert, Keyboard } from 'react-native'
import React, { useContext, useState } from 'react'
import style from '../styles/style'
import { Calendar } from 'react-native-calendars'
import TypeSelector from '../components/TypeSelector'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { UnitContext, WorkoutContext } from '../data/Contexts'


export default function WorkoutAdd() {

    const {data} = useContext(WorkoutContext)
    const {setData} = useContext(WorkoutContext)
    const {units} = useContext(UnitContext)

    const [workoutType, setWorkoutType] = useState('run')
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [date, setDate] = useState()
    const [visible, setVisible] = useState(false)

    const dateSelected = (day) => {
        setVisible(false)
        setDate(day)
    }

    const saveWorkout = () => {

        if (isNaN(Number(distance)) || isNaN(Number(duration))) {
            Alert.alert('Distance and duration must be numbers.')
        }
        else if (Number(distance) < 0) {
            Alert.alert('Distance must be a positive number.')
        }
        else if (Number(duration) < 0) {
            Alert.alert('Duration must be a positive number.')
        }
        else if (!date) {
            Alert.alert('Date must be selected.')
        }
        else {
            setData(prev => [...prev, {type: workoutType, distance: units === '1' ? distance : (distance * 1.609).toString(), duration: duration, date: date}])

            setDistance('')
            setDuration('')
            setDate()
            Keyboard.dismiss()

            return data
        }
    }

    return (
        <View style={style.container}>
            <TypeSelector selectionChanged={setWorkoutType}/>
            <Text>Distance ({units === '1' ? 'km' : 'mi'})</Text>
            <TextInput 
                style={style.input}
                inputMode='decimal'
                placeholder='0'
                value={distance}
                onChangeText={(distance) => setDistance(distance)}
            />
            <Text>Duration (min)</Text>
            <TextInput
                style={style.input}
                inputMode='decimal'
                placeholder='0'
                value={duration}
                onChangeText={(duration) => setDuration(duration)}
            />

            <Modal visible={visible} transparent={true}>
                <Calendar onDayPress={dateSelected} />
            </Modal>
            <Pressable style={style.dateInput} onPress={() => setVisible(true)}>
                <MaterialCommunityIcons name='calendar-clock' size={24}/>
                <Text>{date ? (date.day + '.' + date.month + '.' + date.year) : 'Select date'}</Text>
                <MaterialCommunityIcons name='arrow-expand' size={24}/>
            </Pressable>

            <Pressable style={style.addButton} onPress={saveWorkout}>
                <Text>Add</Text>
            </Pressable>
        </View>
    )
}

