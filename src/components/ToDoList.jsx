import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ToDoItem} from '../components/ToDoItem';

export function ToDoList({tasks, deleteTask}) {
  return (
    <View>
      {tasks.map((item, index) => (
        <ToDoItem
          key={index}
          item={item}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#eee',
  },
});
