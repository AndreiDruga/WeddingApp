import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./components/searchPage";
import TablePage from "./components/tablePage/tablePage";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container-fluid" style={{ padding: 0 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/searchPage" element={<SearchPage />} />
            <Route path="/tablePage" element={<TablePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
