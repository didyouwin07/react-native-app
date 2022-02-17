import Home from './screens/Home';
import Form from './screens/Form';
import Story from './screens/Story';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Story" component={Form} />
        <Stack.Screen name="News" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
