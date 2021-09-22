import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Router>
          <Header />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
