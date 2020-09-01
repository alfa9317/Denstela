import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css'
import theme from './components/ui/Theme';
import Header from './components/ui/Header';
import InConstruction from './pages/InConstruction';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={InConstruction} />
          <Route exact path='/servicios' component={() => <div>Services</div>} />
          <Route exact path='/servicio1' component={() => <div>Custom Software</div>} />
          <Route exact path='/servicio2' component={() => <div>Mobile Apps</div>} />
          <Route exact path='/servicio3' component={() => <div>Websites</div>} />
          <Route exact path='/sobrenostros' component={() => <div>Revolution</div>} />
          <Route exact path='/casos' component={() => <div>About</div>} />
          <Route exact path='/contacto' component={() => <div>Contact</div>} />
          <Route exact path='/contacto2' component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;