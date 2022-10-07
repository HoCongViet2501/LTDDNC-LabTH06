import { useState } from 'react';
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
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
          tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)} />
              </View>
            );
          })
        }
      </ScrollView>
      <InputField addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33CC99',
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 110,

  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});
