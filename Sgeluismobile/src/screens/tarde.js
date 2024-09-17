import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity, Image } from 'react-native';
import { Appbar } from 'react-native-paper';
import * as Constantes from '../utils/constantes';

const Tarde = ({ navigation }) => {
  const ip = Constantes.IP;
  const [menuVisible, setMenuVisible] = useState(false);
  const [observaciones, setObservaciones] = useState([]);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  useEffect(() => {
    fetchtarde();
  }, []);

  const fetchtarde = async () => {
    try {
      const response = await fetch(`${ip}/EXPO2024/api/services/admin/llegadatarde.php?action=readAll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.json();
      console.log('Respuesta de la API:', data); // Log para verificar la respuesta
      if (data.status === 1) {
        setObservaciones(data.dataset);
      } else {
        console.error(data.error);
        setObservaciones([]); // Asegurarse de que observaciones es un array
      }
    } catch (error) {
      console.error('Error al obtener las observaciones:', error);
      setObservaciones([]); // Asegurarse de que observaciones es un array
    }
  };

  const renderObservacion = ({ item }) => (
    <View style={styles.content}>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Fecha:</Text>
          <Text style={styles.tableValue}>{item.fecha}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Estudiante:</Text>
          <Text style={styles.tableValue}>{item.nombre_estudiante}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Profesor:</Text>
          <Text style={styles.tableValue}>{item.nombre_profesor}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Materia:</Text>
          <Text style={styles.tableValue}>{item.nombre}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Hora:</Text>
          <Text style={styles.tableValue}>{item.hora}</Text>
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

      <Text style={styles.title}>Llegadas Tarde</Text>
      <FlatList
        data={observaciones}
        renderItem={renderObservacion}
        keyExtractor={item => item.id_llegada.toString()}
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
         onPress={() => navigation.navigate('profesores')}>
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
export default Tarde;
