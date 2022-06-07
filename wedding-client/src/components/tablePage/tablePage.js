import React from "react";
import "./tablePage.scss";

import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { Avatar } from "@mui/material";
import { createTheme, ThemeProvider} from '@mui/material/styles';

const tablePage = () => {
  const handleOnClick = () => {
    alert("ana are mere");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main:'#ef5350',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

  return (
    <Box className="backGround">
      <Stack direction="row" spacing={2}>
        <div onClick={handleOnClick}>
        <ThemeProvider theme={theme}>
          <Avatar >1</Avatar>
          </ThemeProvider>
        </div>
     
      </Stack>
    </Box>
  );
};
export default tablePage;
