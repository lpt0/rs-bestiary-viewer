import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import AllAreas from './areas/All';
import SpecificArea from './areas/Specific';

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

          <div id="ContentHolder">
            <Route path="/areas/:name" exact component={SpecificArea} />
            <Route path="/areas" exact component={AllAreas} />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
