import { useMutation } from '@apollo/client';
import type { TaskFragment as Task } from '@graphql/graphql';
import { GetAllTasksDocument, UpdateTaskCompleteStatusDocument } from '@graphql/graphql';
import CheckboxControl from 'mui/CheckboxControl';
import Error from 'mui/Error';
import Loading from 'mui/Loading';
import React from 'react';

type TaskCompleteProps = { task: Task }

const TaskComplete: React.FC<TaskCompleteProps> = ({ task }) => {
  const [completeTask, { loading, error }] = useMutation(UpdateTaskCompleteStatusDocument, {
    refetchQueries: [GetAllTasksDocument]
  });
  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <CheckboxControl checked={task.isCompleted} onClick={() => completeTask({ variables: { id: task._id } })} />
    </>
  )
}

export default TaskComplete
