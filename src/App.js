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
          <Route exact path='/servicios' component={() => <div>Servicios</div>} />
          <Route exact path='/servicio1' component={() => <div>Servicio 1</div>} />
          <Route exact path='/servicio2' component={() => <div>Servicio 2</div>} />
          <Route exact path='/servicio3' component={() => <div>Servicio 3</div>} />
          <Route exact path='/sobrenosotros' component={() => <div>Sobre Nosotros</div>} />
          <Route exact path='/casos' component={() => <div>Casos de Éxito</div>} />
          <Route exact path='/contacto' component={() => <div>Contacto</div>} />
          <Route exact path='/citas' component={() => <div>Agenda tu cita</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;