import React, { Component } from 'react';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import SignupScreen from './SignupScreen';
import TodoListScreen from './TodoListScreen';
import AddTodoScreen from './AddTodoScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
const Stack = createStackNavigator();


function App(){
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Stack.Screen 
              name="To Do" 
              component={TodoListScreen} 
            />
            <Stack.Screen 
              name="Add To Do" 
              component={AddTodoScreen} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


export default App;
