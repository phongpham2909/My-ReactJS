import React, { Component } from 'react';

import {
  Button,
  Thumbnail,
} from 'react-bootstrap';


class Products extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      message : ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event)
  { 
    this.setState({
      message: "Đã Thêm"
    });
  }
  render() {
    return (
            <Thumbnail src="./Images/anh1.jpg" alt="242x200">
              <h4>{this.props.name}</h4>
              <p>{this.props.Description}</p>
              <p>
                <Button onClick ={this.onChange} bsStyle="primary">Add To Cart</Button>&nbsp;
              </p>
            </Thumbnail>
            
    );
  }
}

export default Products;
