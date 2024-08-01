import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

const Home = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const items = [
    { text: 'Estudiantes', image: require('../img/estu.png'), route: 'Estudiantes' },
    { text: 'Materias', image: require('../img/mate.png'), route: 'Materia' },
    { text: 'Codigos', image: require('../img/codigos.png'), route: 'Codigos' },
    { text: 'Asistencia', image: require('../img/asistencia.png'), route: 'Asistencia' },
    { text: 'Conducta', image: require('../img/conducta.png'), route: 'comportamientos' },
    { text: 'Profesores', image: require('../img/profesor.png'), route: 'profesores' },
  ];

  const handlePress = (item) => {
    navigation.navigate(item.route);
  };

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="CECSL" titleStyle={styles.appBarTitle} />
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Image source={require('../../assets/menu-icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </Appbar.Header>
      <View style={styles.content}>
        <View style={styles.table}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(item)}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.text}</Text>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Ver Completo</Text>
              </View>
            </TouchableOpacity>
          ))}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  table: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
  cell: {
    alignItems: 'center',
    margin: 15,
    width: '40%',
    backgroundColor: '#F0F0F0',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#1E90FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
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

