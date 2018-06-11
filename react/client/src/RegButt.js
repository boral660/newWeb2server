import React, { Component } from 'react';
import RaisedButton from 'material-ui/Button';

export default class RegButt extends Component {
  constructor(props) {
    super(props);
  }
  /**
* Зарегистрировать  пользователя
*/
  registration = (event) => {
    event.preventDefault();
    if (!this.props.emailAndPass.passwordError && !this.props.emailAndPass.emailError
      && this.props.emailAndPass.email !== "" && this.props.emailAndPass.password !== "") {
      event.preventDefault();
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
            // Если пользователя нет, создать
            var myFfet = {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: password
              }),
              headers: { "Content-Type": "application/json" }
            };
            fetch('/user/create', myFfet)
              .then(res => res.json())
              .then(users => users);
            console.log("Пользователь создан");
            this.props.seans.setState({
              login: true
            });
            this.props.app.setState({
              login: true,
              email: email
            });
            this.props.app.addToDOList();
          } else {
            // Сообщить о том, что пользователь уже существует
            console.log("Пользователь уже существует");
          }
        });
    }
  }

  render() {
    return (
      <RaisedButton onClick={this.registration} type='sumbit' variant='raised' color='secondary' style={{ marginRight: 25 }}>
        Register
        </RaisedButton>
    );
  }
}
