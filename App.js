import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutAdd from './screens/WorkoutAdd';
import WorkoutView from './screens/WorkoutView';
import WorkoutSettings from './screens/WorkoutSettings';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { UnitContext, WorkoutContext } from './data/Contexts';
import { useState } from 'react';
import { DATA } from './data/Data';

const Tab = createBottomTabNavigator()

export default function App() {

  const [data, setData] = useState(DATA)
  const [units, setUnits] = useState('1')

  return (
    <WorkoutContext.Provider value={{ data, setData }}>
      <UnitContext.Provider value={{ units, setUnits }}>
        <NavigationContainer>
          <Tab.Navigator
            sceneContainerStyle={{backgroundColor: 'transparent'}}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let iconName;

                if (route.name === 'Add') {
                  iconName = focused
                    ? 'clipboard-plus'
                    : 'clipboard-plus-outline';
                } else if (route.name === 'View') {
                  iconName = focused 
                  ? 'view-list' 
                  : 'view-list-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused 
                  ? 'cog' 
                  : 'cog-outline';
                }

                return <MaterialCommunityIcons name={iconName} size={32} color='#0083da' />;
              },
              tabBarActiveTintColor: '#0083da',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Add" component={WorkoutAdd} />
            <Tab.Screen name="View" component={WorkoutView} />
            <Tab.Screen name="Settings" component={WorkoutSettings} />
          </Tab.Navigator>
        </NavigationContainer>
      </UnitContext.Provider>
    </WorkoutContext.Provider>
  );
}

