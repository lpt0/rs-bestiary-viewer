import React from 'react';
import './App.css';
import Header from './Header';
import Paper from "@mui/material/Paper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import AllAreas from './areas/All';
import SpecificArea from './areas/Specific';
import SpecificSlayerCategory from './slayer/Specific';
import AllSlayerCategories from './slayer/All';
import SpecificWeakness from './weaknesses/Specific';
import AllWeaknesses from './weaknesses/All';
import AllBeasts from './beasts/All';
import SpecificBeast from './beasts/Specific';

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
            <Paper elevation={8}>
              <Route path="/beasts" exact component={AllBeasts} />
              <Route path="/beasts/:id" exact component={SpecificBeast} />

              <Route path="/areas/:name" exact component={SpecificArea} />
              <Route path="/areas" exact component={AllAreas} />

              <Route path="/slayer/:id" exact component={SpecificSlayerCategory} />
              <Route path="/slayer" exact component={AllSlayerCategories} />

              <Route path="/weaknesses/:id" exact component={SpecificWeakness} />
              <Route path="/weaknesses" exact component={AllWeaknesses} />
            </Paper>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
