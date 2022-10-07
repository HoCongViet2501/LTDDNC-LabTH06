import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
export default InputField = (props) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        props.addTask(task);
        setTask('');
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'android' ? "padding" : "height"}
            style={styles.container}>
            <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
            <TouchableOpacity onPress={() => handleAddTask(task)}>
                <View style={styles.button}>
                    <MaterialIcons name="add-circle" size={29} color="black" style={{ left: 2.5, top: 1.5 }} />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#d5d5d5',
        borderWidth: 1,
        marginHorigontal: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alginItems: 'center',
        justifycontent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    input: {
        color: "black",
        height: 50,
        flex: 1
    },
    button: {
        height: 35,
        width: 35,
        borderRadius: 5,
        backgroundColor: "#fff",
        alginItems: "center",
        justifycontent: "center",
        top: 7,

    }
})