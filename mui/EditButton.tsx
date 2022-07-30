import React, { PropsWithChildren as P } from 'react';
import { Edit as EditIcon } from '@mui/icons-material';
import { ButtonProps } from '@mui/material';
import Button from './CustomButton';

const EditButton: React.FC<P<ButtonProps>> = ({ children, ...props }) => {
  return (
    <Button
      endIcon={<EditIcon />}
      {...props}
    >
      EDIT
    </Button>
  )
}

export default EditButton;
