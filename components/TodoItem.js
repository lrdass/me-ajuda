import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

const TodoItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onDelete(props.todo.key)}>
            <View style={styles.item}>
                <Text key={props.todo.key}>{props.todo.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginBottom: 20
    }
})

export default TodoItem