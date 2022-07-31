import type { TaskFragment as Task } from '@graphql/graphql';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { PropsWithChildren as P } from "react";

type TaskDescriptionProps = {
  task: Task
}

const TaskDescription: React.FC<P<TaskDescriptionProps>> = ({ task }) => {
  return (
    <Box sx={{ width: "560px" }}><Typography sx={{ marginTop: '15px' }}>{task.description}</Typography></Box>
  )
}
export default TaskDescription;
