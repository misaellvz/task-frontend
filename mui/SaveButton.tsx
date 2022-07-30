import React, { PropsWithChildren as P } from 'react';
import { Save as SaveIcon } from '@mui/icons-material';
import { ButtonProps } from '@mui/material';
import Button from './CustomButton';

const SaveButton: React.FC<P<ButtonProps>> = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      endIcon={<SaveIcon />}
      sx={{ marginLeft: '10px', marginTop: '2px' }}
      {...props}
    >
      UPDATE
    </Button>
  )
}

export default SaveButton;
