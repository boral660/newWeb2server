/** EnterTask.js */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import LogButt from './LogButt';
import UnLoginButt from './UnLoginButt';
import RegButt from './RegButt';
import style from './App.css';

export default class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordError: false, emailError: false,
      email: "", password: "",
      login: false
    };
  }

  onInputEm = (event) => {
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if (!r.test(event.target.value) && event.target.value !== "") {
      this.setState({
        emailError: true
      });
    }
    else {
      this.setState({
        emailError: false,
        email: event.target.value
      });
    }
  }
  onInputPass = (event) => {
    var r = /^[A-Za-z\d]*$/;
    if (!r.test(event.target.value) && event.target.value !== "") {
      this.setState({
        passwordError: true
      });
    }
    else {
      this.setState({
        passwordError: false,
        password: event.target.value
      });
    }
  }


  render() {
    return (
      <div className={style.register}>
        {!this.state.login ?
          <form onSubmit={this.onSubmit}>
            {this.state.emailError ?
              <TextField label="Email" error onChange={this.onInputEm} placeholder="simple@simple.com" style={{ width: 200 }} />
              : <TextField label="Email" onChange={this.onInputEm} placeholder="simple@simple.com" style={{ width: 200 }} />}
            <p></p>
            {this.state.passwordError ?
              <TextField label="Password" error onChange={this.onInputPass} placeholder="..." style={{ width: 200 }} />
              : <TextField label="Password" onChange={this.onInputPass} placeholder="..." style={{ width: 200 }} />}
            <p></p>
            <RegButt emailAndPass={this.state} app={this.props.app} seans={this} /> <LogButt app={this.props.app}  emailAndPass={this.state} seans={this} />
          </form>
          : <UnLoginButt app={this.props.app}  seans={this} /> }
      </div>

    );
  }
}