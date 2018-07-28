import React, { Component } from 'react';

import { Row, Col, Grid } from 'react-bootstrap';


class Clock extends Component {
    constructor(props) {
        super(props);//Goi toi component cha cua thuoc tinh do
        this.state = { date: new Date() };//Khoi tao 1 trang thai thuoc tinh date
    }

    //componentDidMount() {
        //alert("Component already rendered");
    //}
    componentDidUpdate(props, state) {
        if (state.date !== this.state.date) {
            alert("Current date: " + this.state.date.toLocaleTimeString());
        }
    }
    componentWillUnmount() {
        alert(134);
    }
    onClick() {
        this.setState({ date: new Date() });//Thay đổi trạng thái của thuộc tính date
    }
    render() {
        return (
            <div>
                <Grid>
                    <Row className="text1">
                        <Col xs={12} md={12}>
                            <p>Hello, {this.props.name}</p>
                            <h3> It is {this.state.date.toLocaleTimeString()}</h3>
                            <button onClick={this.onClick.bind(this)}>Update Time</button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Clock;