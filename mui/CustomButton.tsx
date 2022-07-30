import React, { PropsWithChildren as P } from 'react';
import { Button, ButtonProps } from '@mui/material';

const CustomButton: React.FC<P<ButtonProps>> = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{ marginLeft: '10px', marginTop: '2px' }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default CustomButton;
