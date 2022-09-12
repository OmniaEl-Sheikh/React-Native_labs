import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {DataProvider} from './GlobalState'
import 'localstorage-polyfill';

import  LoginScreen from './components/LoginScreen';
import  SignupScreen from './components/SignupScreen';
import { ProductsList } from './components/ProductsList.js';
import { ProductDetails } from './components/ProductDetails.js';
import { Cart } from './components/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './components/CartContext.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <DataProvider> 
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name='Products' component={ProductsList} 
            options={({ navigation }) => ({
              title: 'Products',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>
            })}/>
            <Stack.Screen name='ProductDetails' component={ProductDetails} 
            options={({ navigation }) => ({
              title: 'Product details',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
            })} />
            <Stack.Screen name='Cart' component={Cart} 
            options={({ navigation }) => ({
              title: 'My cart',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation}/>,
            })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
   </DataProvider>  
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;
