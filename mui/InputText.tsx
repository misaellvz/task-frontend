import React, { PropsWithChildren as P } from 'react';
import { FormControl, TextField, TextFieldProps } from '@mui/material';

const InputText: React.FC<P<TextFieldProps>> = (props) => {

  const isError = props.error;
  return (
    <FormControl sx={{ width: '400px', marginBottom: isError ? '-20px' : '0' }}>
      <TextField
        variant='outlined'
        size='small'
        id={props.name}
        {...props}
      />
    </FormControl>
  )
}

export default InputText;
