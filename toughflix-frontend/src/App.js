import React from 'react';
import './App.css';
import MainPage from './MainPage'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Header from './Header'



import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    if(localStorage.getItem('auth_key')){
      this.setState({
        isLoggedIn: true
      })
    }
  }

  handleLogin = () => {
    if(localStorage.getItem('auth_key')){
      this.setState({
        isLoggedIn: true
      })
    }
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>

        <Header isLoggedIn={this.state.isLoggedIn} />

        <Switch>

          <Route exact path='/' component={() => {
            if(localStorage.getItem('auth_key')){
              return <MainPage />
            } else {
              return <Redirect to='/login' />
            }
          }} />

          <Route path='/login' component={() => {
            return <Login handleLogin={this.handleLogin} />
          }} />

          <Route path='/signup' component={SignUp} />

          <Route path='/logout' component={() => {
            localStorage.clear()
            this.setState({
              isLoggedIn: false
            })
            return <Redirect to='/login' />
          }} />

          <Route>
            <Redirect to='/' />
          </Route>
          
        </Switch>

      </BrowserRouter>
    </div>
  );
}}

export default App;
