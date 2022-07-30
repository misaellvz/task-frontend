import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LinkButton from '../mui/LinkButton';
import { CircularProgress } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0';

export default function Navbar() {
  const { user, error, isLoading } = useUser();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Tasks</Typography>
          {isLoading && <CircularProgress />}
          {error && <div>{error.message}</div>}
          {user && user.name && <span>{user.name}</span>}
          {user && <LinkButton href={'/api/auth/logout'}>Logout</LinkButton>}
          {!user && <LinkButton href={'/api/auth/login'}>Login</LinkButton>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
