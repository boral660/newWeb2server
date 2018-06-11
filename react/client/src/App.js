import React, { Component } from 'react';
import style from './App.css';
import List from './List';
import Button from './Button';
import EnterTask from "./EnterTask";
import LogIn from "./LogIn"


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: ["Сделать ту ду лист", "Не умереть"],
      login: false, email: ""

    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.term !== '') {
      this.setState({
        term: '',
        items: [this.state.term, ...this.state.items]
      });
      if(this.state.login)
      {
        var todo = this.state.term;
        var enabled = 1; // при добавлении всегда тру
        var userEmail = this.state.email;
        this.addToDO(todo,enabled,userEmail)
      }

    }
  }
  // Занести строчку в базу данных
  addToDO(todo,enabled,userEmail)
  {

     // Создаем и добавляем строку
     var myFfet = {
      method: "POST",
      body: JSON.stringify({
        todo: todo,
        enabled: enabled,
        userEmail: userEmail
      }),
      headers: { "Content-Type": "application/json" }
    };
    fetch('/todo/create', myFfet)
      .then(res => res.json())
      .then(ToDoList => ToDoList);
    console.log("Строка добавлена в базу данных");
  }

  // Занести все строчки в таблицу
  addToDOList()
  {
    var items = this.state.items;
    var this1 = this;
    items.forEach(function (item, i, items){
      this1.addToDO(item,true,this1.state.email);
    })
  }

  // Загрузить из базы данных список
  DwlndToDO()
  {
    var userEmail = this.state.email;

     // Создаем и добавляем строку
     var myFfet = {
      method: "POST",
      body: JSON.stringify({
        userEmail: userEmail
      }),
      headers: { "Content-Type": "application/json" }
    };
    fetch('/todo/getuserall', myFfet)
      .then(res => res.json())
      .then(ToDoList =>{
        // Пропарсить и добавить полученный лист в список
        var items = [];
        ToDoList.forEach(function (item, i, ToDoList){
            items.push(item.todo);
        })
        this.setState({
          term: '',
          items: items
        });
    });

    console.log("Получен список туду");
  }
   

  render() {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <h1 className={style.appTitle}>Welcome to(do)</h1>
        </header>
        <LogIn app={this}/>
        <form onSubmit={this.onSubmit} style={{ marginTop: 20 }}>
          <EnterTask term={this.state.term} app={this} />
          <Button />
        </form>
        <List app={this} />
      </div>
    );
  }
}


