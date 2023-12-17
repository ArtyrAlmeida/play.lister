import { StyleSheet, Text, View } from 'react-native';
import { AuthContextProvider } from './src/context/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from './src/hooks/useAuthContext';

const Stack = createNativeStackNavigator();
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { Register } from './src/pages/Register';

export default function App() {

  const { user } = useAuthContext();

  return (
    <AuthContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={user ? 'Home': 'Login'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
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
