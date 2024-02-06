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
import {IconButton} from 'react-native-paper';
/* components */
import {} from '../components';
/* types */
import {IBook, INote} from '../common/types';

/*  */
interface ISelectedBookAndNote {
  bookId: number;
  noteId: number;
}

const Home_ = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  /* state variables */
  const [books, setBooks] = useState<IBook[]>([
    {
      id: 0,
      title: 'Matematicas',
      bookColor: 'green',
      selectedNoteId: 0,
      notes: [{id: 0, content: 'Apunte de matematicas'}],
    },
    {
      id: 1,
      title: 'Trabajo',
      bookColor: 'red',
      selectedNoteId: 1,
      notes: [
        {id: 0, content: 'Cosas del trabajo'},
        {id: 1, content: 'Apunte extra'},
        {id: 2, content: 'Apunte extra'},
        {id: 3, content: 'Apunte extra'},
        {id: 4, content: 'Apunte extra'},
      ],
    },
    {
      id: 2,
      title: 'Sociales',
      bookColor: '#3e3',
      selectedNoteId: 2,
      notes: [
        {id: 0, content: 'Apunte de sociales'},
        {id: 1, content: 'Apunte de sociales'},
        {id: 2, content: 'Apunte de sociales'},
      ],
    },
  ]);
  const [selectedBookAndNote, setSelectedBookAndNote] =
    useState<ISelectedBookAndNote>({
      bookId: 2,
      noteId: 1,
    });

  /* procedure */
  useEffect(() => {
    updateSelectedNote(selectedBookAndNote);
  }, [selectedBookAndNote]);

  const toggleBook = (book: IBook) => {
    setSelectedBookAndNote({
      bookId: book.id,
      noteId: book.selectedNoteId,
    });
  };

  const toggleNote = (note: INote) => {
    setSelectedBookAndNote(prevState => ({
      ...prevState,
      noteId: note.id,
    }));
  };

  const updateSelectedNote = (selectedBookAndNote: ISelectedBookAndNote) => {
    const updateBooks = books.map(book => {
      if (book.id !== selectedBookAndNote.bookId) {
        return book;
      }

      return {
        ...book,
        selectedNoteId: selectedBookAndNote.noteId,
      };
    });

    setBooks(updateBooks);
  };

  const toggleAddBook = () => {
    console.log('agregar libro');
  };

  const drawerView = () => (
    <View style={styles.drawerViewContainer}>
      <View style={styles.drawerViewBook}>
        <View style={styles.addBookContainer}>
          <Text style={styles.section}>Mis libros</Text>
          <IconButton
            icon="plus"
            iconColor="#01579B"
            size={20}
            onPress={() => toggleAddBook()}
          />
        </View>
        {books.map((book, index) => (
          <TouchableOpacity
            onPress={() => toggleBook(book)}
            style={
              book.id == selectedBookAndNote.bookId
                ? styles.selectedBook
                : styles.book
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
        {books[selectedBookAndNote.bookId].notes.map((note, index) => (
          <TouchableOpacity
            onPress={() => toggleNote(note)}
            style={
              selectedBookAndNote.noteId == note.id
                ? styles.selectedNote
                : styles.note
            }
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
    color: '#01579B',    
    borderColor: 'grey',
    paddingLeft: 8,
    fontSize: 14,
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
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderColor: 'grey',

    alignItems: 'flex-start',
  },
  selectedNote: {
    height: 80,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 0,
    borderWidth: 0.5,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderColor: 'grey',
    backgroundColor: '#eee',
    alignItems: 'flex-start',
  },
  noteTitle: {
    color: '#282E33',
  },
  addBookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export {Home_};
