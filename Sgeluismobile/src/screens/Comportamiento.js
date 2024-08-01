import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import * as Constantes from '../utils/constantes';

const ComportamientoScreen = ({ navigation }) => {
  const ip = Constantes.IP;
  const [menuVisible, setMenuVisible] = useState(false);
  const [observaciones, setComportamiento] = useState([]);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  useEffect(() => {
    fetchComportamiento();
  }, []);

  const fetchComportamiento = async () => {
    try {
      const response = await fetch(`${ip}/EXPO2024/api/services/admin/asignar.php?action=readAll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.json();
      console.log('Respuesta de la API:', data); // Log para verificar la respuesta
      if (data.status === 1) {
        setComportamiento(data.dataset);
      } else {
        console.error(data.error);
        setComportamiento([]); // Asegurarse de que observaciones es un array
      }
    } catch (error) {
      console.error('Error al obtener los comportamientos:', error);
      setComportamiento([]); // Asegurarse de que observaciones es un array
    }
  };

  const renderObservacion = ({ item }) => (
    <View style={styles.content}>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>codigo:</Text>
          <Text style={styles.tableValue}>{item.codigo}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Descripcion:</Text>
          <Text style={styles.tableValue}>{item.descripcion}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="CECSL" titleStyle={styles.appBarTitle} />
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Image source={require('../../assets/menu-icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </Appbar.Header>

      <Text style={styles.title}>Comportamientos</Text>
      <FlatList
        data={observaciones}
        renderItem={renderObservacion}
        keyExtractor={item => item.id_comportamiento.toString()}
        contentContainerStyle={styles.list}
      />

      {menuVisible && (
             <View style={styles.overlay}>
             <View style={styles.menu}>
               <TouchableOpacity
                 style={styles.menuItem}
                 onPress={() => navigation.navigate('Home')}>
                 <Text>Inicio</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.menuItem}
                 onPress={() => navigation.navigate('Estudiantes')}>
                 <Text>Estudiantes</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.menuItem}
                 onPress={() => navigation.navigate('Perfil')}>
                 <Text>Perfil</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.menuItem}
                 onPress={() => navigation.navigate('Observaciones')}>
                 <Text>Profesores</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.menuItem}
                 onPress={() => navigation.navigate('Asistencia')}>
                 <Text>Asistencia</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.menuItem}
                 onPress={() => navigation.navigate('Materia')}>
                 <Text>Materias</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.menuItem}
                 onPress={() => navigation.navigate('comportamientos')}>
                 <Text>Comportamiento</Text>
               </TouchableOpacity>
               <TouchableOpacity
                 style={styles.menuItem}
                 onPress={() => navigation.navigate('Codigos')}>
                 <Text>Codigos</Text>
               </TouchableOpacity>
           
               <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
                 <Text style={styles.closeButtonText}>Cerrar</Text>
               </TouchableOpacity>
             </View>
           </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  appBar: {
    backgroundColor: '#120851',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 0,
  },
  appBarTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 10,
    marginRight: 10,
  },
  menuIcon: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tableContainer: {
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  tableLabel: {
    fontWeight: 'bold',
    flex: 1,
  },
  tableValue: {
    flex: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'red',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#000080',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default ComportamientoScreen;
