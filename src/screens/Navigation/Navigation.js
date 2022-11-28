import * as React from 'react';
import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../Auth/Login';
import Registro from '../Auth/Registro';
import MyDrawer from './NavigationDrawer';
import Locales from '../Usuario/Locales';
import Ruta from '../Usuario/Ruta';
import Opinion from '../Usuario/Opinion';

const Stack = createStackNavigator();

const  Navigation= props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                <Stack.Screen name="Registro" component={Registro} options={{headerShown:false}}/>
                <Stack.Screen
                    name="Home"
                    component={MyDrawer}             
                    headerLeft={null}
                    gestureEnabled={false}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Locales" component={Locales} options={{headerShown:false}}/>
                <Stack.Screen name="Ruta" component={Ruta} options={{headerShown:false}}/>
                <Stack.Screen name="Opinion" component={Opinion} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;