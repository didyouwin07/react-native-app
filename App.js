import Home from './screens/Home';
import Form from './screens/Form';
import Story from './screens/Story';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://10.0.2.2:4000/graphql',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Story" component={Form} />
          <Stack.Screen name="News" component={Story} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
