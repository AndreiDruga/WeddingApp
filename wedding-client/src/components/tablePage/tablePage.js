import React from "react";
import "./searchPage.scss";
import { InputBase, Paper } from "@mui/material";
import "@fontsource/alex-brush";
import "@fontsource/allison";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import data from "../data/wedding.json";

const tablePage = () => {

  const handleOnclick = () => {
    let masa = " ";
    for (let i in data) {
      if (data[i].nume === document.getElementById("name").value) {
        masa += data[i].masa;
      }
    }
    console.log(masa);
  };

  return (
    <Box className="searchContainer">
      <h1>Bine ai venit!</h1>
      <Box className="bottomForm">
        <Box className="devider">
          <Divider className="topDevider" />
        </Box>
        <h2>nume complet</h2>
        <Paper
          className="paper"
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
            borderRadius: 10,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} name="name" id="name" />
          <Divider className="deviderBottom" orientation="vertical" />
          <Button
            type="button"
            onClick={handleOnclick}
            startIcon={<SearchIcon className="icon" />}
            sx={{ p: "10px" }}
          ></Button>
        </Paper>
      </Box>
    </Box>
  );
};
export default tablePage;
