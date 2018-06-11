import React, { Component } from 'react';
import RaisedButton from 'material-ui/Button';

export default class UnLoginButt extends Component {
  constructor(props) {
    super(props);
  }
  /**
   * Разлогинится
   */
  unlogin = (event) => {
    event.preventDefault();
    this.props.seans.setState({
      login: false,
      email: ""
    });
    this.props.app.setState({
      login: false,
      email: "",
      items: []
    });
   
  }
  render() {
    return (
      <RaisedButton onClick={this.unlogin} type='sumbit' variant='raised' color='primary' style={{ marginRight: 0 }}>
        Unlog
        </RaisedButton>
    );
  }
}
