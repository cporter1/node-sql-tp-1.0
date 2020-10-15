import React, {Component} from 'react';
import {Alert, Button, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Table} from 'reactstrap';
import axios from "axios";

class ViewPost extends Component {

  constructor(props){
    super(props);

    this.state = {
      loading: true,
      post: null,
    };

    this.getPost();
  }

  getPost = () => {
    axios.get(`http://10.0.0.97:3001/post/${this.props.postID}`).then(response => {
      //console.log(response.data[0]['Title']);
      this.setState({
        post: response.data,
        loading: false,
      });
    }).catch(error => {
      console.log(error);
    });
  };

  render(){
    if(!this.state.loading){
      return(
        <div>
          <Form>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Title</InputGroupText>
              </InputGroupAddon>
              <Input id="title" type='text' disabled defaultValue={this.state.post[0]['Title']}/>
            </InputGroup>
            <div style={{height: '0.4em'}}/>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Body</InputGroupText>
              </InputGroupAddon>
              <Input type="textarea" name="textarea" id="body" disabled defaultValue={this.state.post[0]['Body']}/>
            </InputGroup>
          </Form>
        </div>
      );
    }
    else{
      return (
        <div/>
      )
    }
  }

}

export default ViewPost;