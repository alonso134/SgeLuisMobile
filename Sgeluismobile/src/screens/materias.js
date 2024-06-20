import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';


const MateriasScreen = () => {
    
    const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú

    const toggleMenu = () => setMenuVisible(!menuVisible); // Función para alternar el menú

  const MateriaCard = ({ materia, docente, image }) => {
    return (
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.materia}>{materia}</Text>
          <Text style={styles.docente}>{docente}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notas</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    <Appbar.Header style={styles.appBar}>
      <Appbar.Content title="CECSL" titleStyle={styles.appBarTitle} />
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Image source={require('../../assets/menu-icon.png')} style={styles.menuIcon} />
      </TouchableOpacity>
    </Appbar.Header>

    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notas</Text>
      <MateriaCard
        materia="Lenguaje"
        docente="Docente que imparte la clase"
        image={require('../img/libro.png')}
      />
      <MateriaCard
        materia="Matematica"
        docente="Docente que imparte la clase"
        image={require('../img/calculadora.png')}
      />
      <MateriaCard
        materia="Ciencias"
        docente="Docente que imparte la clase"
        image={require('../img/ciencias.png')}
      />
       <MateriaCard
        materia="Sociales"
        docente="Docente que imparte la clase"
        image={require('../img/sociales.png')}
      />
       <MateriaCard
        materia="Ed. Fe"
        docente="Docente que imparte la clase"
        image={require('../img/gracias.png')}
      />
      <MateriaCard
        materia="Ed. Fisica"
        docente="Docente que imparte la clase"
        image={require('../img/fisico.png')}
      />
      <MateriaCard
        materia="Informatica"
        docente="Docente que imparte la clase"
        image={require('../img/informatica.png')}
      />
      <MateriaCard
        materia="MUCI"
        docente="Docente que imparte la clase"
        image={require('../img/muci.png')}
      />
        <MateriaCard
        materia="Artistica"
        docente="Docente que imparte la clase"
        image={require('../img/artistica.png')}
      />
       <MateriaCard
        materia="Ingles"
        docente="Docente que imparte la clase"
        image={require('../img/ingles.png')}
      />
    </ScrollView>

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
      padding: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    image: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginRight: 10,
    },
    info: {
      flex: 1,
    },
    materia: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    docente: {
      fontSize: 14,
      color: '#555',
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
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
  

export default MateriasScreen;
