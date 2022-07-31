import type { TaskFragment as Task } from '@graphql/graphql';
import { ButtonGroup } from '@mui/material';
import CenteredGrid from 'mui/CenteredGrid';
import CheckboxControl from 'mui/CheckboxControl';
import DeleteButton from 'mui/DeleteButton';
import EditButton from 'mui/EditButton';
import React, { useState } from 'react';
import TaskDescription from './Task.description';
import TaskForm from './Task.form';

type TaskDetailProps = {
  item: Task,
  removeTask: (taskId: string) => void,
  editTask: (taskId: string, description: string) => void,
}

const TaskDetail: React.FC<TaskDetailProps> = ({ item, removeTask, editTask }) => {
  const [isEdit, setIsEdit] = useState(false)
  const handleEdit = (description: string) => {
    editTask(item._id, description);
    setIsEdit(false);
  }
  return (
    <CenteredGrid>
      {isEdit && <TaskForm initialValues={item} handleSubmit={handleEdit} />}
      {!isEdit && <TaskDescription task={item} />}
      <CheckboxControl />
      <EditButton onClick={() => setIsEdit(true)} />
      <DeleteButton onClick={() => removeTask(item._id)} />
      <ButtonGroup />
    </CenteredGrid>
  )
}

export default TaskDetail
