import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import carga from './src/screens/carga.js'
import Sesion from './src/screens/Sesion.js'


export default function App() {


  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Sesion'

        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Sesion" component={Sesion} />
        <Stack.Screen name="carga" component={carga} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
