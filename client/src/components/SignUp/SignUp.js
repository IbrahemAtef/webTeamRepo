import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';

class SignUp extends React.Component {
  state = {
    userName: '',
    email: '',
    password: '',
    type: 'guest',
    cheifKey: ''
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { userName, email, password, type } = this.state;
    try {
      let result = await (
        await axios.post('/api/users/createUser', {
          userName,
          email,
          password,
          type,
        })
      ).data;
      localStorage.setItem('token', result.token);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className='page-main'>
        <div className='bg-layer'>
          <h1>Matbikhi</h1>
          <div className='header-main'>
            <div className='main-icon'>
              <img
                src='https://www9.0zz0.com/2020/11/28/19/473729025.png'
                alt='Done'
              />
            </div>
            <div className='header-left-bottom'>
              <form>
                <div className='icon1'>
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    type='text'
                    name='userName'
                    placeholder='User Name'
                    required
                    value={this.state.userName}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='icon1'>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    required
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='icon1'>
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    required
                    value={this.state.password}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                <div className='icon1'>
                  <FontAwesomeIcon icon={faUserFriends} />
                  <select
                    name='type'
                    value={this.state.type}
                    onChange={this.handleChange.bind(this)}
                  >
                    <option value='guest'>Guest</option>
                    <option value='cheif'>Cheif</option>
                  </select>
                </div>
                {this.state.type === 'cheif' ? (
                  <div className='icon1'>
                    <FontAwesomeIcon icon={faLock} />
                    <input
                      type='password'
                      name='cheifKey'
                      placeholder='Cheif Key'
                      required
                      value={this.state.cheifKey}
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                ) : (
                  <div></div>
                )}
                <div className='bottom' onClick={this.handleSubmit.bind(this)}>
                  <button className='btn'>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
