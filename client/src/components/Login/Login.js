import React from 'react';
// import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


class Login extends React.Component {
  state = {
    
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {
    
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
        <div class="page-main">
            <div class="bg-layer">
                <h1>Matbikhi</h1>
                <div class="header-main">
                    <div class="main-icon">
                    <img
                        src="https://www9.0zz0.com/2020/11/28/19/473729025.png"
                        alt="Done"
                    />
                    </div>
                    <div class="header-left-bottom">
                    <form action="#" method="post">
                        <div class="icon1">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" placeholder="Email Address" required />
                        </div>
                        <div class="icon1">
                        <FontAwesomeIcon icon={faLock} />
                        <input type="password" placeholder="Password" required />
                        </div>
                        <div class="bottom">
                        <button class="btn">Login</button>
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
