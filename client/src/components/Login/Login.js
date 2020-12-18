import React from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      let token = await axios.post("/api/auth/loginUser", { email, password })
      localStorage.setItem('token', token)

    } catch (error) {
      console.log(error)
    }
  }


  render() {
    // if (this.state.user) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: `/${this.state.user.type}`,
    //         state: {
    //           fName: `${this.state.user.fName}`,
    //           gitUser: `${this.state.user.gitUser}`,
    //         },
    //       }}
    //     />
    //   );
    // }
    return (
      <div className="page-main">
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
                  <input type="email" name="email" placeholder="Email Address" required
                    value={this.state.email} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="icon1">
                  <FontAwesomeIcon icon={faLock} />
                  <input type="password" name="password" placeholder="Password" required
                    value={this.state.password} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="bottom">
                  <button className="btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
