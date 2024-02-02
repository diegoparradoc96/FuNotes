import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, DrawerLayoutAndroid} from 'react-native';

/* icons */
import Icon from 'react-native-vector-icons/MaterialIcons';

/* paper */
import {Button, Avatar} from 'react-native-paper';

/* components */
import {Drawer_} from '../components';

const Home_ = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  /* state variables */
  const [books, setBooks] = useState([
    {
      title: 'Matematicas',
    },
  ]);

  const toggleBook = () => {
    console.log('libro tocado');
  };

  const drawerView = () => (
    <View style={styles.drawerViewContainer}>
      <View style={styles.drawerViewBook}>
        <Text style={styles.section}>Mis libros</Text>
        {books.map((book, index) => (
          <Button
            onPress={() => toggleBook()}
            textColor="#282E33"
            style={styles.book}
            key={index}>
            <View style={styles.bookColor}></View>
            <View style={styles.bookTitleContainer}>
              <Text style={styles.bookTitle}>{book.title}</Text>
            </View>
          </Button>
        ))}
      </View>

      <View style={styles.drawerViewNote}>
        <Text style={styles.section}></Text>
        {books.map((book, index) => (
          <Button
            onPress={() => toggleBook()}
            textColor="#282E33"
            style={styles.note}
            key={index}>
            {book.title}
          </Button>
        ))}
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={380}
      drawerPosition="left"
      renderNavigationView={drawerView}>
      {/* aqui van a ir los aputnes que se desean guardar */}
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  section: {
    color: 'black',
  },
  drawerViewContainer: {
    flexDirection: 'row',
  },
  drawerViewBook: {
    width: '40%',
  },
  drawerViewNote: {
    width: '60%',
  },
  book: {
    backgroundColor: '#ccc',
    borderRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  bookColor: {
    backgroundColor: '#3e3',
    padding: 10,
  },
  bookTitleContainer: {
    paddingLeft: 5,
  },
  bookTitle: {
    color: 'black',
  },
  note: {
    backgroundColor: '#eee',
    borderRadius: 0,
    alignItems: 'flex-start',
  },
});

export {Home_};
