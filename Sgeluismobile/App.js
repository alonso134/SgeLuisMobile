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
import Institución from './src/screens/institucion.js';
import Notas from './src/screens/notas.js';
import Estudiantes from './src/screens/Estudiantes.js'; 
import estudiante from './src/screens/estudiante.js'; 
import Asistencia from './src/screens/asistencia.js'; 
import Grados from './src/screens/grados.js'; 
import comportamientos from './src/screens/comportamientos.js'; 
import Comportamiento from './src/screens/Comportamiento.js'; 
import Asistencias from './src/screens/Asistencias.js'; 
import Materia from './src/screens/Materia.js'; 
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
        <Stack.Screen name="Estudiantes" component={Estudiantes} />  
        <Stack.Screen name="estudiante" component={estudiante} />  
        <Stack.Screen name="Asistencia" component={Asistencia} /> 
        <Stack.Screen name="Asistencias" component={Asistencias} />  
        <Stack.Screen name="Grados" component={Grados} />  
        <Stack.Screen name="comportamientos" component={comportamientos} />   
        <Stack.Screen name="Comportamiento" component={Comportamiento} />   
        <Stack.Screen name="carga" component={carga} options={{ headerShown: false }} />
        <Stack.Screen name="Codigos" component={Codigos} /> 
        <Stack.Screen name="Ausencias" component={Ausencias} />
        <Stack.Screen name="Observaciones" component={Observacion} />
        <Stack.Screen name="Tarde" component={Tarde} />
        <Stack.Screen name="Institución" component={Institución} />
        <Stack.Screen name="Notas" component={Notas} />
        <Stack.Screen name="Materia" component={Materia} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

