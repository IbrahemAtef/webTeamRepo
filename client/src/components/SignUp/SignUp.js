import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

class SignUp extends React.Component {
  state = {
    userName: '',
    email: '',
    password: '',
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { userName, email, password } = this.state
    try {
      let token = await axios.post('/api/auth/loginUser', {
        userName,
        email,
        password,
      })
      localStorage.setItem('token', token)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    ;<div className="page-main">
      <div className="bg-layer">
        <h1>Matbikhi</h1>
        <div className="header-main">
          <div className="main-icon">
            <img
              src="https://www9.0zz0.com/2020/11/28/19/473729025.png"
              alt="Done"
            />
          </div>
          <div className="header-left-bottom">
            <form onClick={this.handleSubmit.bind(this)}>
              <div className="icon1">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="text"
                  name="username"
                  placeholder="UserName"
                  required
                  value={this.state.userName}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="icon1">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="icon1">
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="bottom">
                <button className="btn">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  }
}

export default SignUp
