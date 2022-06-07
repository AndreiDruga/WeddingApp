import React from "react";
import "./tablePage.scss";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";




const tablePage = () => {

  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];


  return (
    <Box className="backGround">
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
    >
      {buttons}
    </ButtonGroup>
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical contained button group"
      variant="contained"
    >
      {buttons}
    </ButtonGroup>
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical contained button group"
      variant="text"
    >
      {buttons}
    </ButtonGroup>
    </Box>
  );
};
export default tablePage;
