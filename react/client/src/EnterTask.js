/** EnterTask.js */
import React, { Component } from 'react';
import Input from 'material-ui/Input';

export default class EnterTask extends Component {

  constructor(props) {
    super(props);
    this.state = { inputValue: this.props.term };
     //this.onInput = this.onInput.bind(this);
  }

  onInput = (event) => {
    let value = event.target.value;
    if (/^[A-ZА-ЯЁa-zа-яё\d_\s!-]*$/.test(value)){
      this.props.app.setState({ term: value });
      this.setState({ inputValue: value });}
  }
  onClick1 = (event) => {
    if(this.props.term==='')
       this.setState({ inputValue: '' });
  }

 
  render() {
    return (
      <Input placeholder="Input task" onChange={this.onInput} onClick={this.onClick1} value={this.state.inputValue}/>
    );
  }
}