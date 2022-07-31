import { useMutation } from '@apollo/client';
import { CreateTaskDocument, CreateTaskDto, GetAllTasksDocument } from '@graphql/graphql';
import Error from 'mui/Error';
import Loading from 'mui/Loading';
import React from 'react';
import TaskForm from './Task.form';

const TaskCreate: React.FC = () => {
  const [createTask, { loading, error }] = useMutation(CreateTaskDocument, {
    refetchQueries: [GetAllTasksDocument]
  });
  const addTask = (description: string) => {
    const createDto: CreateTaskDto = { description }
    createTask({ variables: { data: createDto } })
  }
  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <TaskForm handleSubmit={addTask} />
    </>
  )
}

export default TaskCreate
