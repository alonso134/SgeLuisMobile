import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';


const Tarde = ({ navigation }) => {
  

    const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del primer menú
    const [secondMenuVisible, setSecondMenuVisible] = useState(false); // Estado para controlar la visibilidad del segundo menú
  
    const toggleMenu = () => setMenuVisible(!menuVisible); // Función para alternar el primer menú
    const toggleSecondMenu = () => setSecondMenuVisible(!secondMenuVisible); // Función para alternar el segundo menú
        // Información de la ausencia
        const Tarde = {
          asignatura: 'Ciencias',
          docente: 'Daniel Carranza',
          fecha: '20/08/2024',
          hora: '1:30 pm',
        };
      
        return (
          <View style={styles.container}>
            <Appbar.Header style={styles.appBar}>
              <Appbar.Content title="CECSL" titleStyle={styles.appBarTitle} />
              <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
                <Image source={require('../../assets/menu-icon.png')} style={styles.menuIcon} />
              </TouchableOpacity>
            </Appbar.Header>
      
            <View style={styles.centeredTitleContainer}>
        <Text style={styles.centeredTitle}>Llegadas Tarde a Clases</Text>
        <TouchableOpacity onPress={toggleSecondMenu} style={styles.menuButton}>
          <Image source={require('../../assets/menu-icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>

            {/* Tabla de información de la ausencia */}
            <View style={styles.content}>
              <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                  <Text style={styles.tableLabel}>Asignatura:</Text>
                  <Text style={styles.tableValue}>{Tarde.asignatura}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableLabel}>Docente:</Text>
                  <Text style={styles.tableValue}>{Tarde.docente}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableLabel}>Fecha:</Text>
                  <Text style={styles.tableValue}>{Tarde.fecha}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableLabel}>Hora:</Text>
                  <Text style={styles.tableValue}>{Tarde.hora}</Text>
                </View>
              </View>
            </View>

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
              onPress={() => navigation.navigate('MateriasScreen')}>
              <Text>Materias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('Perfil')}>
              <Text>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('Negativo')}>
              <Text>Códigos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('Observaciones')}>
              <Text>Observaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('Ausencias')}>
              <Text>Ausencias</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('Tarde')}>
              <Text>Llegadas Tarde</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
  

            {/* Segundo menú desplegable */}
            {secondMenuVisible && (
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('Institución')}>
              <Text>Llegadas Tarde a Institución</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={toggleSecondMenu}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
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
  centeredTitleContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderTopWidth: 1,
    borderTopColor: '#000000',
  },
  centeredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tableContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 30, // Aumenta el padding interior para más espacio
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    width: '95%', // Ajusta el ancho del contenedor de la tabla
    maxWidth: 600, // Establece un ancho máximo para la tabla
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30, // Aumenta el espacio entre filas
  },
  tableLabel: {
    fontWeight: 'bold',
    fontSize: 20, // Aumenta el tamaño de la etiqueta
  },
  tableValue: {
    marginLeft: 10,
    fontSize: 20, // Aumenta el tamaño del valor
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

export default Tarde;