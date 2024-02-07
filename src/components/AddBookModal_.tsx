import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Modal,
  Portal,
  Button,
  PaperProvider,
  TextInput,
} from 'react-native-paper';

interface IAddBookModal_ {
  visible: boolean;
}

const AddBookModal_ = ({visible}: IAddBookModal_) => {
  return (
    <Modal visible={visible} style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>Crear Nuevo Libro</Text>

        <View style={styles.rowContainer}>
          <Text style={styles.subtitle}>Nombre</Text>
          <TextInput
            style={{width: '70%'}}
            placeholder="Ingrese el nombre del libro"
          />
        </View>

        <View style={styles.buttonCreateContainer}>
          <Button
            mode="contained"
            onPress={() => console.log('intente crear')}
            style={styles.buttonCreate}>
            Crear
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
  },
  modal: {
    backgroundColor: 'white',
    minWidth: '80%',
    marginBottom: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    color: '#3D3D3D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  subtitle: {
    color: '#3D3D3D',
    fontWeight: 'bold',
    fontSize: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonCreateContainer: {
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  buttonCreate: {
    width: '40%',
    borderRadius: 5,
  },
});

export {AddBookModal_};
