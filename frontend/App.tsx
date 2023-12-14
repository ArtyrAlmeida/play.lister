import { Text, View } from 'react-native';
import { AuthContextProvider } from './src/context/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthContext } from './src/hooks/useAuthContext';

function Home()
{
  return(
    <View>
      <Text>Home</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

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
  );
}