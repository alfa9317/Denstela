import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css'
import theme from './components/ui/Theme';
import InConstruction from './pages/InConstruction';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={InConstruction} />
        </Switch>
    </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;