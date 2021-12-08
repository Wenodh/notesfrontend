import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';
const LandingPage = () => {
    //  useEffect(() => {
    //      const userInfo = localStorage.getItem('userInfo');
    //      if (userInfo) {
    //          history.push('/mynotes');
    //      }
    //  }, [history]);
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <h1 className="title">Welcome Login to Create Notes</h1>
                        <p className="subtitle">
                            One Safe place for all yours notes.
                        </p>
                        <div className="bottomContainer">
                            <a href="/login">
                                <Button size="lg" className="landingButton">
                                    Login
                                </Button>
                            </a>
                            <a href="/register">
                                <Button
                                    size="lg"
                                    className="landingButton"
                                    variant="outline-primary"
                                >
                                    SignUp
                                </Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default LandingPage;
