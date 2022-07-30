import React, { PropsWithChildren as P } from 'react';
import { AddCircle as AddIcon } from '@mui/icons-material';
import { ButtonProps } from '@mui/material';
import Button from './CustomButton';

const AddButton: React.FC<P<ButtonProps>> = ({ children, ...props }) => {
  return (
    <Button
      endIcon={<AddIcon />}
      {...props}
    >
      ADD
    </Button>
  )
}

export default AddButton;
