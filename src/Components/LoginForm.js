import React, { Component } from 'react';
import '../Customs_CSS/Styles/LoginForm.css';

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
    constructor(props) {
        super(props);//Goi toi component cha cua thuoc tinh do
        this.state = {
            message: "Mật Khẩu Or Password không hợp lệ!!!",
            data: { loginname: "", password: "" }
        };
    }
    onSubmit() {
        if (this.state.data.loginname === "phongpham2140051@gmail.com" || this.state.data.password === "29091996") {
            alert(
                "LoginName: " + this.state.data.loginname +
                "\nPassword: " + this.state.data.password
            );
        }
        else {
            alert(
                alert(this.state.message)
            );
        }
    }
    /*onHandel(event)
    {
        let newState = {
            data: this.state.data
        };
        let inputName =  event.target.name;
        newState.data[inputName] = event.target.value;
        this.setState(newState);
    }*/
    onHandelLoginName(event) {
        let newState = { data: this.state.data };
        newState.data.loginname = event.target.value;
        this.setState(newState);

    }
    onHandelPassword(event) {
        let newState = { data: this.state.data };
        newState.data.password = event.target.value;
        this.setState(newState);
    }
    render() {
        return (
            <Grid>
                <Row className="text1">
                    <Col xs={12} md={12}>
                        <h2>Đăng Nhập</h2>
                    </Col>
                </Row>
                <Form horizontal className="app-login-form">
                    <Row className="show-grid">
                        <Col xs={12} sm={10} md={10} lg={10}>
                            <FormGroup>
                                <Col componentClass={ControlLabel} sm={4}>
                                    Email
                                    </Col>
                                <Col sm={8}>
                                    <FormControl name="loginname" type="email" placeholder="Email" value={this.state.data.loginname} onChange={this.onHandelLoginName.bind(this)} />
                                </Col>
                            </FormGroup>

                            <FormGroup >
                                <Col componentClass={ControlLabel} sm={4}>
                                    Password
                                    </Col>
                                <Col sm={8}>
                                    <FormControl name="password" type="password" placeholder="Password" value={this.state.data.password} onChange={this.onHandelPassword.bind(this)} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={4} sm={8}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={4} sm={8}>
                                    <Button onClick={this.onSubmit.bind(this)} type="submit">Login</Button>
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