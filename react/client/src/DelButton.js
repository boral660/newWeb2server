import React, { Component } from 'react';
import RaisedButton from 'material-ui/Button';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { index: this.props.index };
  }
  onClick = (event) => {
    if(this.props.app.state.login)
      this.RemoveToDO();

    this.props.items.splice(this.state.index,1);
    this.props.app.setState({
      items: this.props.items
    });
 
  }
  // Удалить из базы данных
  RemoveToDO()
  {
    var userEmail = this.props.app.state.email;
    var todo = this.props.app.state.items[this.state.index];
     // Создаем и добавляем строку
     var myFfet = {
      method: "POST",
      body: JSON.stringify({
        todo: todo,
        userEmail: userEmail
      }),
      headers: { "Content-Type": "application/json" }
    };
    fetch('/todo/removeOneTodo', myFfet);

    console.log("Todo удален из базы данных");
  }

  render() {
    return (
        <RaisedButton onClick={this.onClick} variant='raised' color='secondary'  style={{marginLeft: 15}} >
            Delete
        </RaisedButton>
    );
  }
}
