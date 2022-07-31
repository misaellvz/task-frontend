import type { TaskFragment as Task } from '@graphql/graphql';
import CenteredGrid from 'mui/CenteredGrid';
import EditButton from 'mui/EditButton';
import React, { useState } from 'react';
import TaskComplete from './Task.complete';
import TaskDelete from './Task.delete';
import TaskDescription from './Task.description';
import TaskUpdate from './Task.update';

type TaskDetailProps = {
  detail: Task
}

const TaskDetail: React.FC<TaskDetailProps> = ({ detail }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <CenteredGrid>
      {isEdit && <TaskUpdate task={detail} handleUpdate={() => setIsEdit(false)} />}
      {!isEdit && <TaskDescription task={detail} />}
      <TaskComplete task={detail} />
      <EditButton onClick={() => setIsEdit(true)} />
      <TaskDelete id={detail._id} />
    </CenteredGrid>
  )
}

export default TaskDetail
