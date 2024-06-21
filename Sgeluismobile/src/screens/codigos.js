import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { Appbar } from 'react-native-paper';

const Codigos = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Códigos Negativos');

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const renderDetailContent = () => {
    if (selectedCategory === 'Códigos Negativos') {
      return (
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>Tipo:</Text>
              <Text style={styles.detailText}>                  Leve</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>Código:</Text>
              <Text style={styles.detailText}>                  Aplica lenguaje soez</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>Docente:</Text>
              <Text style={styles.detailText}>                  Karina Hernandez</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>Fecha:</Text>
              <Text style={styles.detailText}>                  20/08/2024</Text>
            </View>
          </View>
        </View>
      );
    } else if (selectedCategory === 'Códigos Positivos') {
      return (
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>Tipo:</Text>
              <Text style={styles.detailText}>                 Positivo</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>Código:</Text>
              <Text style={styles.detailText}>                  Cumplió con la tarea</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>Docente:</Text>
              <Text style={styles.detailText}>                  Wilfredo Granados</Text>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailTitle}>Fecha:</Text>
              <Text style={styles.detailText}>                  20/08/2024</Text>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="CECSL" titleStyle={styles.appBarTitle} />
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Image source={require('../../assets/menu-icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </Appbar.Header>

      <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
          <Text style={styles.dropdownButtonText}>{selectedCategory}</Text>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/menu-icon.png')} style={styles.menuIcon}/>
            <Image source={require('../../assets/black_arrow.png')} style={styles.arrowIcon}/>
          </View>
        </TouchableOpacity>
      </View>

      {renderDetailContent()}

      <Modal
        visible={dropdownVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleDropdown}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                setSelectedCategory('Códigos Negativos');
                toggleDropdown();
              }}
            >
              <Text>Códigos Negativos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => {
                setSelectedCategory('Códigos Positivos');
                toggleDropdown();
              }}
            >
              <Text>Códigos Positivos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {menuVisible && (
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
              <Text>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MateriasScreen')}>
              <Text>Materias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Perfil')}>
              <Text>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Observaciones')}>
              <Text>Observaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Ausencias')}>
              <Text>Ausencias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Tarde')}>
              <Text>Llegadas Tarde</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Codigos')}>
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
    width: 45,
    height: 45,
  },
  arrowIcon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 30,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 50,
    marginBottom: 50,
    minHeight: 400,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dropdownButtonText: {
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  detailText: {
    fontSize: 18,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: 250,
    alignItems: 'center',
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    width: '100%',
    alignItems: 'center',
  },
});

export default Codigos;
