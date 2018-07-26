import React, { Component } from 'react';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import './App.css';
import Products from './Components/Products';
import SigninForm from './Components/SigninForm';

import {
  Row,
  Col,
  Grid,
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
    <Header></Header>
    <SigninForm></SigninForm>
    <LoginForm></LoginForm>
    <Grid>
    <Row>
          <Col xs={6} md={4}>
    <Products name="Sản Phẩm 1" Description="Sản Phẩm Loại 1"></Products>
    </Col>
    
          <Col xs={6} md={4}>
    <Products name="Sản Phẩm 2" Description="Sản Phẩm Loại 2"></Products>
    </Col>
    
          <Col xs={6} md={4}>
    <Products name="Sản Phẩm 3" Description="Sản Phẩm Loại 3"></Products>
    </Col>
        </Row>
        </Grid>
    </div>
    );
  }
}

export default App;
