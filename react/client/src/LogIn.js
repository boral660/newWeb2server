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
      textForEmail : "Введите в формате test@mail.com", textForPassword: "Допускаются только латинские буквы и цифры",
      login: false
    };
  }
  writeMessage (text, standart)
{
  if(standart){
  this.setState({
    textForEmail: "Введите в формате test@mail.com"
  });
  }else
  {
    this.setState({
      emailError:true,
      textForEmail: text
    });
  }
}
writeMessageOnPassword (text, standart)
{
  if(standart){
  this.setState({
    textForPassword: "Допускаются только латинские буквы и цифры"
  });
  }else
  {
    this.setState({
      passwordError: true,
      textForPassword: text
    });
  }
}

  onInputEm = (event) => {
    var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
    if (!r.test(event.target.value) && event.target.value !== "") {
      this.setState({
        emailError: true
      });
      this.writeMessage ("", true);
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
      this.writeMessageOnPassword(true);
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
              <TextField label="Email" error onChange={this.onInputEm} helperText={this.state.textForEmail} placeholder="simple@simple.com" style={{ width: 200 }} />
              : <TextField label="Email" onChange={this.onInputEm}  placeholder="simple@simple.com" style={{ width: 200 }} />}
            <p></p>
            {this.state.passwordError ?
              <TextField label="Password" type="password" helperText={this.state.textForPassword} error onChange={this.onInputPass} placeholder="..." style={{ width: 200 }} />
              : <TextField label="Password" type="password" onChange={this.onInputPass} placeholder="..." style={{ width: 200 }} />}
            <p></p>
            <RegButt emailAndPass={this.state} app={this.props.app} seans={this} /> <LogButt app={this.props.app}  emailAndPass={this.state} seans={this} />
          </form>
          : <UnLoginButt app={this.props.app}  seans={this} /> }
      </div>

    );
  }
}