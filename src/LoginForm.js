import React, { Component } from 'react';
import './Components/Styles/LoginForm.css';

import {
    Form,
    FormGroup,
    FormControl,
    Col,
    Checkbox,
    Button,
    ControlLabel,
    Grid,
    Row,
} from "react-bootstrap";

class LoginForm extends Component {
    render() {
        return (
            <Grid>
                <Row className="text1">
                    <Col xs={12} md={12}>
                    <h2> Đăng Nhập Hệ Thống </h2>
                    </Col>
                </Row>
                <Form horizontal className="app-login-form">
                    <Row className="show-grid">
                            <Col xs={12} sm={10} md={10} lg={10}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col componentClass={ControlLabel} sm={4}>
                                        Email
                                    </Col>
                                    <Col sm={8}>
                                        <FormControl type="email" placeholder="Email" />
                                    </Col>
                                </FormGroup>
                         
                                <FormGroup controlId="formHorizontalPassword">
                                    <Col componentClass={ControlLabel} sm={4}>
                                        Password
                                    </Col>
                                    <Col sm={8}>
                                        <FormControl type="password" placeholder="Password" />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={4} sm={8}>
                                        <Checkbox>Remember me</Checkbox>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={4} sm={8}>
                                        <Button type="submit">Sign in</Button>
                                    </Col>
                                </FormGroup>

                            </Col>
                    </Row>
                </Form>
            </Grid>

        );
    }
}

export default LoginForm;