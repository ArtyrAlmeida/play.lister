import { StyleSheet, Text, View } from 'react-native';
import { AuthContextProvider } from './src/context/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from './src/hooks/useAuthContext';

const Stack = createNativeStackNavigator();
import { Home } from './src/pages/Home';

export default function App() {

  //const { user } = useAuthContext();
  const user = 'Teste'

  return (
    <AuthContextProvider>
    <NavigationContainer>
          <Stack.Navigator initialRouteName={user ? 'Home': 'Login'}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131112',
    alignItems: 'center',
  },
});
