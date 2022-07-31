import React, { PropsWithChildren as P } from 'react';
import { Box, BoxProps } from '@mui/material';

const CenteredBox: React.FC<P<BoxProps>> = ({ children, ...props }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="start" sx={{ width: '560px' }} {...props}>
      {children}
    </Box>
  )
}

export default CenteredBox;
