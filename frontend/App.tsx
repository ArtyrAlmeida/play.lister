import { StyleSheet, Text, View } from 'react-native';
import { AuthContextProvider } from './src/context/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from './src/hooks/useAuthContext';

const Stack = createNativeStackNavigator();
import { Login } from './src/pages/Login';
import { Register } from './src/pages/Register';
import InitialPage from './src/pages/InitialPage';
import PlaylistDetail from './src/pages/PlaylistDetail';
import { MyProfile } from './src/pages/MyProfile';
import { AddOrEditPlaylist } from './src/pages/AddOrEditPlaylist';

export default function App() {

  const { user } = useAuthContext();
  //const user = {}
  return (
    <AuthContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={user ? 'Home': 'Login'}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={InitialPage} />
            <Stack.Screen name='PlaylistDetail' component={PlaylistDetail} />
            <Stack.Screen name='MyProfile' component={MyProfile} />
            <Stack.Screen name='CreatePlaylist' component={AddOrEditPlaylist} />

          </Stack.Navigator>
        </NavigationContainer>
      
    </AuthContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131112',
  },
});
