import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Task from '@components/Task/Task';
import { Box } from "@mui/material";
import React from "react";

const HomePage: React.FC = () => (

  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
    <Task />
  </Box>
);

export default HomePage;
export const getServerSideProps = withPageAuthRequired();
