import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import carga from './src/screens/carga.js';
import Home from './src/screens/Home.js';
import Sesion from './src/screens/Sesion.js';
import Codigos from './src/screens/codigos.js'; 
import Ausencias from './src/screens/Ausencias.js';
import Observacion from './src/screens/Observaciones.js'; 
import Tarde from './src/screens/tarde.js'; 
import Institucion from './src/screens/institucion.js';
import MateriasScreen from './src/screens/materias.js';
import Perfil from './src/screens/perfil.js';

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
        <Stack.Screen name="Codigos" component={Codigos} /> 
        <Stack.Screen name="Ausencias" component={Ausencias} />
        <Stack.Screen name="Observaciones" component={Observacion} />
        <Stack.Screen name="Tarde" component={Tarde} />
        <Stack.Screen name="Institucion" component={Institucion} />
        <Stack.Screen name="MateriasScreen" component={MateriasScreen} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

