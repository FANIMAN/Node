import './App.scss';  //SASS is a preprocessor of css  //allows to rapidly develop a css
import Login from './components/pages/Login';
import Registration from './components/pages/Register';
import Home from './components/pages/Home';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
          <BrowserRouter>
            <Switch>
              <Route>
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Registration}></Route>
              </Route>
            </Switch>
          </BrowserRouter>
  );
}

export default App;
