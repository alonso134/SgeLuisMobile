import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

const Home = ({ navigation }) => {
  const items = [
    { text: 'Codigos', image: require('../img/codigo.jpg') },
    { text: 'Observaciones', image: require('../img/observaciones.jpg') },
    { text: 'Ausencias', image: require('../img/ausencias.jpg') },
    { text: 'Llegadas Tarde clase', image: require('../img/tardes.jpg') },
  ];

  const handlePress = (item) => {
    // Maneja la navegación o la acción al presionar un elemento
    console.log(`${item.text} presionado`);
    // Puedes usar navigation.navigate('SomeScreen') para navegar a otra pantalla
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="CECSL" titleStyle={styles.appBarTitle}  />
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
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0, // Remover sombra si no es necesaria
  },
  appBarTitle: {
    color: '#FFFFFF', // Color del texto del Appbar
    fontSize: 20, // Tamaño del texto del Appbar
    fontWeight: 'bold', // Peso de la fuente del texto del Appbar
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
    width: '100%', // Ajustar el ancho según sea necesario
    backgroundColor: '#FFFFFF', // Cambiar este valor al color deseado para la tabla
    padding: 20,
    borderRadius: 10, // Opcional, para redondear las esquinas
    shadowColor: '#000', // Opcional, para sombra
    shadowOffset: { width: 0, height: 2 }, // Opcional, para sombra
    shadowOpacity: 0.25, // Opcional, para sombra
    shadowRadius: 3.84, // Opcional, para sombra
    elevation: 5, // Opcional, para sombra en Android
  },
  cell: {
    alignItems: 'center',
    margin: 15,
    width: '40%', // Ajusta este valor para lograr la disposición deseada
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
});

export default Home;
