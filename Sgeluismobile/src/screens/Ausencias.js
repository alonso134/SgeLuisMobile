import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

const Ausencias = () => {
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú

  const toggleMenu = () => setMenuVisible(!menuVisible); // Función para alternar el menú

  // Información de la ausencia
  const ausenciaInfo = {
    asignatura: 'Matemática',
    docente: 'Daniel Carranza',
    fecha: '20/08/2024',
    estado: true,
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
        <Text style={styles.centeredTitle}>Ausencias</Text>
      </View>

      {/* Tabla de información de la ausencia */}
      <View style={styles.content}>
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Asignatura</Text>
            <Text style={styles.tableValue}>{ausenciaInfo.asignatura}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Maestro:</Text>
            <Text style={styles.tableValue}>{ausenciaInfo.docente}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Fecha:</Text>
            <Text style={styles.tableValue}>{ausenciaInfo.fecha}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableLabel}>Estado:</Text>
            <Text style={styles.tableValue}>
              {ausenciaInfo.estado ? (
                <Image source={require('../../assets/check-icon.png')} style={styles.checkIcon} />
              ) : (
                <Text>Pendiente</Text>
              )}
            </Text>
          </View>
        </View>
      </View>

      {/* Menú desplegable */}
      {menuVisible && (
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
              <Text>Opción 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
              <Text>Opción 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
              <Text>Opción 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
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
    marginLeft: 20,
    fontSize: 20, // Aumenta el tamaño del valor

  },
  checkIcon: {
    width: 30,
    height: 30,
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

export default Ausencias;