/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { View } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  return (
    <View>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </View>
  );
}

export default App;
