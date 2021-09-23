import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import AllAreas from './areas/All';
import SpecificArea from './areas/Specific';
import SpecificSlayerCategory from './slayer/Specific';
import AllSlayerCategories from './slayer/All';
import SpecificWeakness from './weaknesses/Specific';
import AllWeaknesses from './weaknesses/All';
import AllBeasts from './beasts/All';

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
            <Route path="/beasts" exact component={AllBeasts} />

            <Route path="/areas/:name" exact component={SpecificArea} />
            <Route path="/areas" exact component={AllAreas} />

            <Route path="/slayer/:id" exact component={SpecificSlayerCategory} />
            <Route path="/slayer" exact component={AllSlayerCategories} />

            <Route path="/weaknesses/:id" exact component={SpecificWeakness} />
            <Route path="/weaknesses" exact component={AllWeaknesses} />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
