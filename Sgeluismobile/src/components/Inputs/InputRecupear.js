import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PasswordRecovery from './PasswordRecovery';  // Importa el componente que creaste

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
                {/* Puedes agregar otras pantallas aquí */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
