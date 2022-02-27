import React, { Component } from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import apiservice from '../services/apiservice';



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

class Register extends Component{

    constructor(props){
        super(props);
        this.state ={
            userName: '',
            password: '',
            mobileNumber: '',
            gender: '',
            
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {userName: this.state.userName, password: this.state.password, mobileNumber: this.state.mobileNumber, gender: this.state.gender};
        apiservice.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/join');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <Container>
              <Wrapper>
                <Title>REGISTER HERE</Title>
                <Form>
                  <Input type="text" placeholder="username" name="userName" className="form-control" value={this.state.userName} onChange={this.onChange}/>
                  <Input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                  <Input placeholder="mobileNumber" name="mobileNumber" className="form-control" value={this.state.mobileNumber} onChange={this.onChange}/>
                  <Input placeholder="Gender" name="gender" className="form-control" value={this.state.gender} onChange={this.onChange}/>
                 <Agreement>
                   By creating an account, I consent to the processing of my personal
                   data in accordance with the <b>PRIVACY POLICY</b>
                 </Agreement>
                 <Button onClick={this.saveUser}>REGISTER</Button>
            </Form>
            </Wrapper>
            </Container>
        );
    }
}

export default Register;