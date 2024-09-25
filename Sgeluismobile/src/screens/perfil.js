import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Appbar } from 'react-native-paper';
import * as Constantes from '../utils/constantes';

const Perfil = ({ navigation }) => {
  const [profile, setProfile] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const ip = Constantes.IP;

  const fetchProfile = async () => {
    try {
      const response = await fetch(`${ip}/EXPO2024/api/services/admin/profesores.php?action=readProfile`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data); // Verifica la respuesta de la API
      if (data.status && data.dataset) {
        setProfile(data.dataset);
      } else {
        Alert.alert('Error', data.error || 'No se encontró el perfil');
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al cargar el perfil');
    } finally{
      console.log(profile);
    }
  };

  useEffect(() => {
    fetchProfile(); // Carga los datos al iniciar el componente
  }, [ip]);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${ip}/EXPO2024/api/services/admin/profesores.php?action=logOut`, {
        method: 'GET',
      });
      const data = await response.json();
      if (data.status) {
        navigation.navigate('Sesion');
      } else {
        Alert.alert('Error', data.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al cerrar la sesión');
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderProfileInfo = () => (
    <View style={styles.tableContainer}>
      <View style={styles.tableRow}>
        <Text style={styles.tableLabel}>Nombre:</Text>
        <Text style={styles.tableValue}>{profile.nombre_profesor }</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableLabel}>Apellido:</Text>
        <Text style={styles.tableValue}>{profile.apellido_profesor}</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableLabel}>Correo:</Text>
        <Text style={styles.tableValue}>{profile.correo_profesor }</Text>
      </View>
      <View style={styles.tableRow}>
        <Text style={styles.tableLabel}>Alias:</Text>
        <Text style={styles.tableValue}>{profile.alias_profesor }</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="CECSL" titleStyle={styles.appBarTitle} />
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Image source={require('../../assets/menu-icon.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </Appbar.Header>

      <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Perfil</Text>
        <View style={styles.profileInfo}>
          <Image source={require('../../assets/avatar.png')} style={styles.profileImage} />
          {renderProfileInfo()}
          <TouchableOpacity style={styles.reloadButton} onPress={fetchProfile}>
            <Text style={styles.reloadButtonText}>Recargar Datos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menú desplegable */}
      {menuVisible && (
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
              <Text>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Estudiantes')}>
              <Text>Estudiantes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Perfil')}>
              <Text>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Observaciones')}>
              <Text>Profesores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Asistencia')}>
              <Text>Asistencia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Materia')}>
              <Text>Materias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('comportamientos')}>
              <Text>Comportamiento</Text>
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
    width: 35,
    height: 35,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  tableContainer: {
    width: '100%',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  tableLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableValue: {
    fontSize: 16,
    color: '#555555',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    elevation: 5,
  },
  menuItem: {
    padding: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#000080',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
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
  reloadButton: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  reloadButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Perfil;
