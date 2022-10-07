import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import InputField from './templates/InputField';
import TaskItem from './templates/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, value) => value != index));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY TODO APP</Text>
      <ScrollView style={styles.ScrollView}>
        {
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask()}></TaskItem>
              </View>
            );
          })
        }
      </ScrollView>
      <InputField addTask={addTask}></InputField>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 15,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});
