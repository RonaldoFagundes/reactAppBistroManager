import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import Login from './components/login';
import Home from './components/home';

import Insertuser from './components/insertuser';

import Insertproducts from './components/insertproducts';
import Updateproducts from './components/updateproducts';
import Deleteproducts from './components/deleteproducts';





export default function Routes() {
    return (

       <Stack.Navigator
         screenOptions={{
         headerShown: false
         }} 
        >

            <Stack.Screen
              name='Login'
              component={Login}
            />

         <Stack.Screen
              name='Home'
              component={Home}
            />


         <Stack.Screen
              name='Insertuser'
              component={Insertuser}
            />

          <Stack.Screen
              name='Insertproducts'
              component={Insertproducts}
            />


          <Stack.Screen
              name='Updateproducts'
              component={Updateproducts}
            />

          <Stack.Screen
              name='Deleteproducts'
              component={Deleteproducts}
            />
           
       </Stack.Navigator>

    )};