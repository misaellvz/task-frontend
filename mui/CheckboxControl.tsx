import { Checkbox, FormControlLabel, FormControlLabelProps } from '@mui/material';
import React, { PropsWithChildren as P } from 'react';

interface CheckboxControlProps extends Partial<FormControlLabelProps> {
}

const CheckboxControl: React.FC<P<CheckboxControlProps>> = (props) => {
  return (
    <FormControlLabel
      {...props}
      label=""
      sx={{ marginLeft: '10px' }}
      control={<Checkbox color="success" />}
    />
  )
}

export default CheckboxControl;
