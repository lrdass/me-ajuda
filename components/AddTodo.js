import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const AddTodo = props => {
    console.log(props)
    const [todoText, setTodoText] = useState('')

    return (
        <View>
            <Modal visible={props.isVisible}>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={(text) => setTodoText(text)} placeholder='test' style={styles.input} />
                    <Button onPress={() => props.addTodo(todoText)} title='add' />
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    input: { marginBottom: 10, padding: 10 }
})

export default AddTodo