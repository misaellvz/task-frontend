import React, { PropsWithChildren as P } from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { ButtonProps } from '@mui/material';
import Button from './CustomButton';

const DeleteButton: React.FC<P<ButtonProps>> = ({ children, ...props }) => {
  return (
    <Button
      endIcon={<DeleteIcon />}
      {...props}
    >
      DELETE
    </Button>
  )
}

export default DeleteButton;
