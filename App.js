import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home';
import EpisodesList from './components/EpisodesList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: "SUPER FILM", headerTitleAlign: 'center',}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Episodes" component={EpisodesList} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;