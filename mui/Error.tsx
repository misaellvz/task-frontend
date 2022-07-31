import React, { PropsWithChildren as P } from 'react';
import { Alert, Snackbar, SnackbarProps } from '@mui/material';
import { ApolloError } from '@apollo/client';

interface ErrorProps extends SnackbarProps {
  error: ApolloError
}

const Error: React.FC<P<ErrorProps>> = ({ children, error, ...props }) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={10 * 1000}
      open={open}
      onClose={handleClose}
      {...props}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error.message}
        {children}
      </Alert>
    </Snackbar>
  )
}

export default Error;
