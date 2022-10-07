import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

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
                    <MaterialIcons name="add" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
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
        color: "#fff",
        height: 50,
        flex: 1
    },
    button:{
        height:30,
        width:30,
        borderRadius:5 ,
        backgroundColor:"#fff",
        alginItems:"center",
        justifycontent:"center",
    }
})