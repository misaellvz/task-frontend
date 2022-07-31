import { useMutation } from '@apollo/client';
import { DeleteTaskDocument, GetAllTasksDocument } from '@graphql/graphql';
import DeleteButton from 'mui/DeleteButton';
import Error from 'mui/Error';
import Loading from 'mui/Loading';
import React from 'react';

type TaskDeleteProps = { id: any }

const TaskDelete: React.FC<TaskDeleteProps> = ({ id }) => {
  const [deleteTask, { loading, error }] = useMutation(DeleteTaskDocument, {
    refetchQueries: [GetAllTasksDocument]
  });
  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <DeleteButton onClick={() => deleteTask({ variables: { id } })} />
    </>
  )
}

export default TaskDelete
