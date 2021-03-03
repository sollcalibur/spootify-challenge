import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

export default class Login extends Component {

    handleLogin = (e) => {
        const {
            REACT_APP_CLIENT_ID,
            REACT_APP_AUTHORIZE_URL,
            REACT_APP_REDIRECT_URL
        } = process.env;

        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    render() {
        const handleLogin = this.handleLogin;
        return (
            <Container>
                <Row>
                    <Col sm={3}></Col>
                    <Col>
                        <div className="login">
                            <h1>Spootify Challenge</h1>
                            <h4>
                                Welcome, Music Lover!
                            </h4>
                            <p>
                                “Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.”
                                ― Plato
                            </p>
                            <p>
                                <Button size="lg" variant="primary" type="submit" onClick={handleLogin}>
                                    Login to spotify
                                    </Button>
                            </p>
                        </div>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        );
    }
}

connect()(Login);