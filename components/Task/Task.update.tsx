import { useMutation } from '@apollo/client';
import type { TaskFragment as Task } from '@graphql/graphql';
import { UpdateTaskDocument, UpdateTaskDto, GetAllTasksDocument } from '@graphql/graphql';
import Error from 'mui/Error';
import Loading from 'mui/Loading';
import React from 'react';
import TaskForm from './Task.form';

type TaskUpdateProps = {
  task: Task
  handleUpdate: () => void
}

const TaskUpdate: React.FC<TaskUpdateProps> = ({ task, handleUpdate }) => {
  const [updateTask, { loading, error }] = useMutation(UpdateTaskDocument, {
    refetchQueries: [GetAllTasksDocument]
  });
  const editTask = (description: string) => {
    const updateDto: UpdateTaskDto = { description };
    updateTask({ variables: { id: task._id, data: updateDto } });
    handleUpdate();
  }
  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <TaskForm initialValues={task} handleSubmit={editTask} />
    </>
  )
}

export default TaskUpdate
