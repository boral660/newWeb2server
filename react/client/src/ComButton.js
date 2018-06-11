import React, { Component } from 'react';
import RaisedButton from 'material-ui/Button';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { index: this.props.index, check: false, textMes: '' };
  }
  onClick = (event) => {
    if(!this.state.check){
      this.setState({check: true,textMes: this.props.app.state.items[this.state.index]});
      this.props.app.state.items[this.state.index]='- - - - - Complited - - - - -';
      this.props.app.setState({
       items: this.props.items
     });
    } else{
      this.props.app.state.items[this.state.index]=this.state.textMes;
      this.props.app.setState({
       items: this.props.items
      });
      this.setState({check: false,textMes: ''});
    }
  }

  render() {
    return (
        <RaisedButton onClick={this.onClick} variant='raised'  style={{marginLeft: 15}}>
          CHECK
        </RaisedButton>
    );
  }
}
