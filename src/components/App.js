import React, { Component } from 'react';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SignupScreen from './SignupScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/rootReducer';

const store = createStore(rootReducer);
const Stack = createStackNavigator();


function App(){
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ 
              title: 'My home',
            }}
          />
          <Stack.Screen 
            name="Details" 
            component={DetailsScreen} 
				  />
          <Stack.Screen 
            name="Sign Up" 
            component={SignupScreen} 
				  />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
