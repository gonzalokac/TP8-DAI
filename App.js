import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Socha, Kacanas)</Text>
      </View>

      <View style={styles.body}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1200px-Flag_of_Israel.svg.png' }}
          style={styles.logo}
          resizeMode="contain"
        />

        <TextInput
          style={styles.input}
          placeholder="simon@galaxies.dev"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#666"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>¿Olvidaste la clave?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    backgroundColor: '#B2FFFF',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  body: {
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#B2FFFF',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#B2FFFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    color: 'black',
    marginTop: 5,
  },
});
