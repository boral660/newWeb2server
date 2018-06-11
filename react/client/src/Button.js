import React, { Component } from 'react';
import RaisedButton from 'material-ui/Button';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <RaisedButton type='sumbit' variant='raised' color='primary' style={{marginLeft: 15}}>
            Enter
        </RaisedButton>
    );
  }
}
