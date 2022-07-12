import logo from './logo.svg';
import './App.scss';  //SASS is a preprocessor of css  //allows to rapidly develop a css
import LoginForm from './components/imports/LoginForm';
import LeftLogin from './components/imports/LeftLogin';

function App() {
  return (
    <div id="login">
      <div className="container">
        <div className="row login-box">
          <LeftLogin/>
          <LoginForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
