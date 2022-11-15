import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Home from '../Usuario/Home';
import Directorio from '../Usuario/Directorio';
import Huejutla from '../Usuario/Huejutla';
import CustonDrawer from './CustonDrawer';


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
        <Drawer.Navigator drawerContent={props=><CustonDrawer{...props}/>} screenOptions={{
            headerShown:false, 
            drawerActiveBackgroundColor:'#F7AF85',
            drawerActiveTintColor:'#010D52',
            drawerInactiveTintColor:'#FA0C7B',
            drawerLabelStyle:{marginLeft:-25,fontSize:15}}}>
            <Drawer.Screen name="Home" component={Home} options={{drawerIcon:({color})=>(
                <Ionicons name="home-outline" size={22} color={color}/>
            )}} />
            <Drawer.Screen name="Directorio" component={Directorio} options={{drawerIcon:({color})=>(
                <Ionicons name="list-outline" size={22} color={color}/>
            )}}/>
            <Drawer.Screen name="Huejutla" component={Huejutla} options={{drawerIcon:({color})=>(
                <Ionicons name="ribbon-outline" size={22} color={color}/>
            )}}/>
        </Drawer.Navigator>
    
  );
}

export default MyDrawer