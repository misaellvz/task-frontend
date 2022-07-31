import { CircularProgress, CircularProgressProps } from '@mui/material';
import React from 'react';
import CenteredBox from './CenteredBox';

const Loading: React.FC<CircularProgressProps> = (props) => {
  return (
    <CenteredBox paddingTop="10px" position="absolute" top="50%" left="50%" sx={{ transform: 'translate(-50%, -50%)' }}>
      <CircularProgress {...props} />
    </CenteredBox>
  )
}

export default Loading;
