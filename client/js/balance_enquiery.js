import React,{Component,props} from 'react';
import axios from 'axios';
import {store} from './store/index.js';
import {Container,Row,Col,Button,
Form, FormGroup, Label, Input,InputGroup,FormText } from 'reactstrap';
import add_money_handle from './actions/add_money_handle.js';
const Div ={
  fontFamily: 'Kosugi sans-serif'
};
class  Balance_enquery extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    const data=event.target.elements;
    const name=data[0].value;
    const password=data[1].value;
    axios.post('/add_money',{
      value:{
        name:name,
        password:password
      }
    })
    .then(
      response=>{

        console.log(response.data);
        if (response.data.status == 'user not exist') {
          alert('create your account');
          this.props.history.push('/create_account');

        }
        else {
            const value=response.data;
            console.log(response.data.name);
            console.log(response.data.balance);
            var balance=response.data.balance;
            alert("your balance is"+balance);
          this.props.history.push('/');
        }

  })
}
  render(){
    return(
      <div style={Div}>
      <Container className="mt-md-5">
        <Row className="mt-md-5">
          <Col md={{size:6 }} className='mt-5 '>
            <img src='./../dist/about-head-img.png' alt='hello world' className="ml-3"/>
          </Col>
          <Col md={{size:6}} className="mt-5">
            <h2 className="mt-5 ml-5">Balance_enquery </h2>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
              <InputGroup className="mt-5">
              <Input type='text' name='text'id='name' placeholder='Full name' required/>
                <Input type="password" name="password" id="password" placeholder="password" className="ml-md-3" required/>
              </InputGroup>
              <InputGroup className="mt-5 justify-content-center">
              <Button color="primary">
                  <small>
                    CONTINUE TO SUBMIT
                  </small>
                </Button>
              </InputGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
export default Balance_enquery;
