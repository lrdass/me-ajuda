import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import firebase from 'firebase'
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'

export default function App() {
  const [showModal, setToggleModal] = useState(false)
  const [todos, setTodos] = useState([])

  const addTodoHandler = todo => {
    setTodos([...todos, { key: Math.random().toString(), value: todo }])
    setToggleModal(false)
  }

  const deleteHandler = (key) => {
    setTodos(todos => todos.filter(todo => todo.key !== key))
  }

  const firebaseConfig = {
    apiKey: "AIzaSyDaj-YTLvTc-YSoqlOemEg_4lt88kkhkL4",
    authDomain: "me-ajuda-backend.firebaseapp.com",
    databaseURL: "https://me-ajuda-backend.firebaseio.com",
    projectId: "me-ajuda-backend",
    storageBucket: "me-ajuda-backend.appspot.com",
    messagingSenderId: "762417345643",
    appId: "1:762417345643:web:e1de9bfbcb05acf7246d2e",
    measurementId: "G-4G85B6LK6T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database()


  return (

    <View style={styles.container}>
      <StatusBar />
      <Button onPress={() => setToggleModal(!showModal)} title="Adicionar" />
      <AddTodo addTodo={addTodoHandler} isVisible={showModal} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} onDelete={deleteHandler} />}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
