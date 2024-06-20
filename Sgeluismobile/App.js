import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import carga from './src/screens/carga.js'
import Home from './src/screens/Home.js'
import Sesion from './src/screens/Sesion.js'
import Ausencias from './src/screens/Ausencias.js'
import Observación from './src/screens/Observaciones.js'
import Tarde from './src/screens/tarde.js'
import Institución from './src/screens/institucion.js'
import MateriasScreen from './src/screens/materias.js'

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="carga" component={carga} options={{ headerShown: false }} />
        <Stack.Screen name="Ausencias" component={Ausencias} />
        <Stack.Screen name="Observación" component={Observación} />
        <Stack.Screen name="Tarde" component={Tarde} />
        <Stack.Screen name="Institución" component={Institución} />
        <Stack.Screen name="MateriasScreen" component={MateriasScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
