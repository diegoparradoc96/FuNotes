import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  TouchableOpacity,
} from 'react-native';

/* icons */
import Icon from 'react-native-vector-icons/MaterialIcons';

/* paper */
import {} from 'react-native-paper';

/* components */
import {} from '../components';

const Home_ = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  /* state variables */
  const [books, setBooks] = useState([
    {
      id: 0,
      title: 'Matematicas',
      bookColor: 'green',
      notes: [{content: 'Apunte de matematicas'}],
    },
    {
      id: 1,
      title: 'Trabajo',
      bookColor: 'red',
      notes: [{content: 'Cosas del trabajo'}],
    },
    {
      id: 2,
      title: 'Sociales',
      bookColor: '#3e3',
      notes: [{content: 'Apunte de sociales'}],
    },
  ]);
  const [selectedBook, setSelectedBook] = useState({
    id: 2,
    notes: [{content: 'Apunte de sociales'}],
  });

  /* procedure */
  useEffect(() => {}, []);

  const toggleBook = (book: any) => {
    selectBook(book);
  };

  const toggleNote = (note: any) => {
    console.log('mi nota: ', note);
  };

  const selectBook = (book: any) => {
    setSelectedBook({id: book.id, notes: book.notes});
  };

  const drawerView = () => (
    <View style={styles.drawerViewContainer}>
      <View style={styles.drawerViewBook}>
        <Text style={styles.section}>Mis libros</Text>
        {books.map((book, index) => (
          <TouchableOpacity
            onPress={() => toggleBook(book)}
            style={
              book.id == selectedBook.id ? styles.selectedBook : styles.book
            }
            key={index}>
            <View
              style={[
                {backgroundColor: book.bookColor},
                styles.bookColor,
              ]}></View>
            <View style={styles.bookTitleContainer}>
              <Text style={styles.bookTitle}>{book.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* notes */}
      <View style={styles.drawerViewNote}>
        {selectedBook.notes.map((note, index) => (
          <TouchableOpacity
            onPress={() => toggleNote(note)}
            style={styles.note}
            key={index}>
            <Text style={styles.noteTitle}>{note.content}</Text>
          </TouchableOpacity>
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
      {/* aqui van a ir los apuntes que se desean guardar */}
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  section: {
    color: 'black',
    borderColor: 'grey',
    paddingLeft: 8,
  },
  drawerViewContainer: {
    height: '100%',
    flexDirection: 'row',
  },
  drawerViewBook: {
    width: '40%',
  },
  drawerViewNote: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: '60%',
  },
  book: {
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectedBook: {
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 0,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  bookColor: {
    padding: 10,
  },
  bookTitleContainer: {
    paddingLeft: 5,
  },
  bookTitle: {
    color: '#282E33',
  },
  note: {
    height: 80,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 0,
    backgroundColor: '#eee',
    alignItems: 'flex-start',
  },
  noteTitle: {
    color: '#282E33',
  },
});

export {Home_};
