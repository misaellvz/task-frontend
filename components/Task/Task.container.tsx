import { Grid, GridProps } from "@mui/material";
import React, { PropsWithChildren as P } from "react";

const TaskContainer: React.FC<P<GridProps>> = ({ children, ...props }) => {
  return (
    <Grid sx={{ marginTop: '30px' }} {...props}>
      {children}
    </Grid>
  )
}
export default TaskContainer;
