import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
import * as Constantes from '../utils/constantes';

const GradosScreen = ({ navigation }) => {
  const ip = Constantes.IP;
  const [menuVisible, setMenuVisible] = useState(false);
  const [observaciones, setObservaciones] = useState([]);
  const [searchText, setSearchText] = useState(''); // Estado para el texto de búsqueda
  const [filteredObservaciones, setFilteredObservaciones] = useState([]); // Estado para observaciones filtradas

  const toggleMenu = () => setMenuVisible(!menuVisible);

  useEffect(() => {
    fetchObservaciones();
  }, []);

  useEffect(() => {
    filterObservaciones();
  }, [searchText, observaciones]); // Filtrar cuando cambia el texto de búsqueda o las observaciones

  const fetchObservaciones = async () => {
    try {
      const response = await fetch(`${ip}/Expo2024/api/services/admin/grado.php?action=readAll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.json();
      console.log('Respuesta de la API:', data); // Log para verificar la respuesta
      if (data.status === 1) {
        setObservaciones(data.dataset);
        setFilteredObservaciones(data.dataset); // Inicialmente mostrar todas las observaciones
      } else {
        console.error(data.error);
        setObservaciones([]);
        setFilteredObservaciones([]); // Asegurarse de que filteredObservaciones es un array
      }
    } catch (error) {
      console.error('Error al obtener las observaciones:', error);
      setObservaciones([]);
      setFilteredObservaciones([]); // Asegurarse de que filteredObservaciones es un array
    }
  };

  const filterObservaciones = () => {
    if (searchText === '') {
      setFilteredObservaciones(observaciones); // Mostrar todas si no hay texto de búsqueda
    } else {
      const filtered = observaciones.filter(observacion =>
        observacion.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
        observacion.nombre_seccion.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredObservaciones(filtered);
    }
  };

  const renderObservacion = ({ item }) => (
    <View style={styles.content}>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>nombre:</Text>
          <Text style={styles.tableValue}>{item.nombre}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableLabel}>Seccion:</Text>
          <Text style={styles.tableValue}>{item.nombre_seccion}</Text>
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

      <Text style={styles.title}>Grados</Text>

      {/* Campo de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Grados"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredObservaciones} // Mostrar las observaciones filtradas
        renderItem={renderObservacion}
        keyExtractor={item => item.id_grado.toString()}
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
  // Estilos existentes
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
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 16,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 10,
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
});

export default GradosScreen;
