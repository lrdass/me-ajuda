import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
