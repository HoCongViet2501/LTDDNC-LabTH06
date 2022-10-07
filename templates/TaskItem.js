import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default TaskItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons name="delete" size={24} color="#fff" style={styles.delete} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginhorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#3E3332',
        borderRadius: 50,
        marginRight: 10,
        alignItems: 'center',
        justifycontent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: "#fff",
        fontSize: 20,
    },
    taskContainer:{
        backgroundColor: '#3E3332',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifycontent: 'space-between',
        flex: 1,
        paddhorizontal: 10,
        paddvertical: 5,
        minheight: 50,
    },
    task: {
        color: "#fff",
        width: '90%',
        fontsize: 16,
    },
    delete: {
        marginLeft: 10,
    }
});