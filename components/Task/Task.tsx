import type { TaskFragment as Task } from '@graphql/graphql';
import React, { useState } from 'react';
import TaskContainer from './Task.container';
import TaskDetail from './Task.detail';
import TaskForm from './Task.form';

const TaskFC: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (description: string) => {
    const id = (Math.random() * 1000).toString()
    setTasks([ ...tasks, { _id: id, description, isCompleted: false }])
  }
  const editTask = (id: string, newValue: string) => {
    setTasks((prev) => prev.map((item) => (item._id === id ? ({ ...item, description: newValue }) : item)))
  }
  const removeTask = (id: string) => {
    const removeTask = tasks.filter((task) => task._id !== id)
    setTasks(removeTask);
  }
  return (
    <TaskContainer>
      <TaskForm handleSubmit={addTask} />
      {tasks.map((item) => <TaskDetail editTask={editTask} removeTask={removeTask} key={item._id} item={item} />)}
    </TaskContainer>
  )
}

export default TaskFC
