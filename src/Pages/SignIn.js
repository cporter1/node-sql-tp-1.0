import React, {Component} from 'react';
import {Form, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Button} from 'reactstrap';

class SignIn extends Component {

  constructor(props){
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.callBackendAPI();
  }

  onSubmit = (ev) => {
    /*ev.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));*/
  };


  callBackendAPI = async () => {
    fetch(`http://10.0.0.97:3001/api/hey`)
      .then(response => response.text())
      .then(response => this.setState({data: response}));

    fetch(`http://10.0.0.97:3001/sql`)
      .then(response => response.text())
      .then(response => this.setState({sql: response}));
  };

  render(){

    return(
      <div className='center'>

        <Label>{this.state.sql}</Label>

        <Form onSubmit={this.onSubmit}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Email</InputGroupText>
            </InputGroupAddon>
            <Input id="email" type='text' placeholder="Email" />
          </InputGroup>
          <div style={{height: '0.4em'}}/>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Password</InputGroupText>
            </InputGroupAddon>
            <Input id="password" type="password" placeholder="Password" />
          </InputGroup>
          <div style={{height: '0.4em'}}/>
          <Button>Sign In</Button>
        </Form>
      </div>
    );
  }

}

export default SignIn;