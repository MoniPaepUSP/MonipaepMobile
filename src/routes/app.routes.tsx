import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Config, Profile, Symtopms } from '../pages';
import { HealthConditions } from '../pages/HealthConditions';

const AppStack = createStackNavigator()

const AppRoutes: React.FC = () => (
    <AppStack.Navigator
        headerMode = "none"
    >
        <AppStack.Screen name = "Profile" component ={Profile}/>
        <AppStack.Screen name = "Symptoms" component ={Symtopms}/>
        <AppStack.Screen name = "Config" component={Config}/>
        <AppStack.Screen name = "HealthConditions" component={HealthConditions}/>
    </AppStack.Navigator>
)

export default AppRoutes;