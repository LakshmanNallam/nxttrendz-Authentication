import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', disErroe: false}

  onAutorizationSucces = () => {
    const {history} = this.props
    history.replace('/')
  }

  formSubmitted = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response, data)
    if (response.ok) {
      console.log('Succes')

      this.onAutorizationSucces()
    } else {
      this.setState({disErroe: true})
    }
  }

  usernameChanged = event => {
    this.setState({username: event.target.value})
  }

  passwordChanged = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, disErroe} = this.state
    console.log(username)
    return (
      <div className="LogINcON">
        <div className="con1Login">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="loginGurls"
            alt="website login"
          />
        </div>
        <div className="con2Login">
          <div className="LoginFromImgCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="sdfbfsd"
            />
          </div>
          <form className="formCon" onSubmit={this.formSubmitted}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              placeholder="Username"
              onChange={this.usernameChanged}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={this.passwordChanged}
              placeholder="Password"
            />

            <button type="submit">Loginn</button>
            {disErroe && <p>*Username and Password didn't match</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
