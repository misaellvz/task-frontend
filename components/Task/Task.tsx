import { useQuery } from '@apollo/client';
import { GetAllTasksDocument } from '@graphql/graphql';
import Error from 'mui/Error';
import Loading from 'mui/Loading';
import React from 'react';
import TaskContainer from './Task.container';
import TaskCreate from './Task.create';
import TaskDetail from './Task.detail';

const TaskFC: React.FC = () => {
  const { loading, error, data } = useQuery(GetAllTasksDocument);
  const tasks = data?.tasks ?? [];
  return (
    <TaskContainer>
      <TaskCreate />
      {error && <Error error={error} />}
      {loading && <Loading />}
      {tasks.map((item) => <TaskDetail key={item._id} detail={item} />)}
    </TaskContainer>
  )
}

export default TaskFC
