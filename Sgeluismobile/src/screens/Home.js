import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

const Home = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú

  const items = [
    { text: 'Codigos', image: require('../img/codigo.jpg') },
    { text: 'Observaciones', image: require('../img/observaciones.jpg') },
    { text: 'Ausencias', image: require('../img/ausencias.jpg') },
    { text: 'Llegadas Tarde clase', image: require('../img/tardes.jpg') },
  ];
  const handlePress = (item) => {
    if (navigation) {
      if (item.text === 'Ausencias') {
        navigation.navigate('Ausencias');
      } else if (item.text === 'Observaciones') {
        navigation.navigate('Observación');
      } else if (item.text === 'Llegadas Tarde clase') {
        navigation.navigate('Tarde');
      } 
      else if (item.text === 'Codigos') {
        navigation.navigate('Negativo');
      } else {
        console.log(`${item.text} presionado`);
      }
    } else {
      console.warn('Navigation prop is not available.');
    }
  };

  const toggleMenu = () => setMenuVisible(!menuVisible); // Función para alternar el menú

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="CECSL" titleStyle={styles.appBarTitle} />
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Image source={require('../../assets/menu-icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </Appbar.Header>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Inicio</Text>
        </View>
        <View style={styles.table}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(item)}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/*  menú desplegable */}
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
              onPress={() => navigation.navigate('Materias')}>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  table: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cell: {
    alignItems: 'center',
    margin: 15,
    width: '40%',
  },
  image: {
    width: 80,
    height: 90,
    borderRadius: 40,
    backgroundColor: '#D3D3D3',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
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

export default Home;
