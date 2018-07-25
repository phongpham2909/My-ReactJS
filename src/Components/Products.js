import React , { Component } from 'react';

import {
    Grid, 
    Row,
    Button,
    Thumbnail,
    Col,

         } from 'react-bootstrap';


class Products extends Component {
    render() {
      return (
        <Grid>
              <Row className="text1">
                    <Col xs={12} md={12}>
                    <h2> Sản Phẩm Của Chúng Tôi </h2>
                    </Col>
                </Row>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail labe    l</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="/thumbnaildiv.png" alt="242x200">
              <h3>Thumbnail label</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Button</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
      );
    }
  }
  
  export default Products;
  