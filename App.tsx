import { StatusBar } from 'expo-status-bar';
import { Contador } from './src/screens/Contador';
import { Account } from './src/screens/Account';
import { createComponentForStaticNavigation } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const stack = createComponentForStaticNavigation();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Home'> 
        <Stack.Screen name='Home' component={Home} /> 
        <Stack.Screen name='Contador' component={Contador} /> 
        <Stack.Screen name='Account' component={Account} /> 
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

