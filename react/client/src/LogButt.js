import React, { Component } from 'react';
import RaisedButton from 'material-ui/Button';

export default class LogButt extends Component {
  constructor(props) {
    super(props);
  }
  /**
   * Залогинится
   */
  login = (event) => {
    event.preventDefault();
    if (!this.props.emailAndPass.passwordError && !this.props.emailAndPass.emailError
      && this.props.emailAndPass.email !== "" && this.props.emailAndPass.password !== "") {
      var email = this.props.emailAndPass.email;
      var password = this.props.emailAndPass.password;
      // Узнать, есть ли пользователь с таким email
      var myFfet = {
        method: "POST",
        body: JSON.stringify({
          email: email
        }),
        headers: { "Content-Type": "application/json" }
      };
      fetch('/user/getByEmail', myFfet)
        .then(res => res.json())
        .then(user => {
          if (user.fail) {
            // Если пользователя нет, сообщить об ошибке
            console.log("Пользователь не найден")
          } else { //Сравнить логин и пароль
            if (user.password === password) {
              // Авторизация успешна
              console.log("Авторизация прошла успешно");
              this.props.seans.setState({
                login: true
              });
              this.props.app.setState({
                login: true,
                email: email
              });
              this.props.app.DwlndToDO();
            }
            else {
              // Сообщить, что пароль неверный
              console.log("Неверный пароль")
            }
          }
        });
    }
  }
  render() {
    return (
      <RaisedButton onClick={this.login} type='sumbit' variant='raised' color='primary' style={{ marginRight: 0 }}>
        Login
        </RaisedButton>
    );
  }
}
