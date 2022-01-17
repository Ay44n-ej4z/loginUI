import './App.css';
import LoginForm from './components/Login/LoginForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './components/SignUp/SignIn';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path = '/logIn' element = {<LoginForm />} />
      <Route exact path = '/signIn' element = {<SignIn />} />
      <Route exact path = '/' element = {<Dashboard />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
