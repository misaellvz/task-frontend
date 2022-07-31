import React, { PropsWithChildren as P } from 'react';
import { Grid, GridProps } from '@mui/material';

const CenteredGrid: React.FC<P<GridProps>> = ({ children, ...props }) => {
  return (
    <Grid display="flex" alignItems="start" sx={{ boxShadow: 1, height: '75px', paddingTop: '15px' }} {...props}>
      {children}
    </Grid>
  )
}

export default CenteredGrid;
