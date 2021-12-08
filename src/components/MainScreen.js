import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './MainScreen.css';
const MainScreen = ({ tittle, children }) => {
    return (
        <div className="mainBack">
            <Container>
                <Row>
                    <div className="page">
                        {tittle && (
                            <>
                                <h1 className="heading">{tittle}</h1>
                                <hr />
                            </>
                        )}
                        {children}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default MainScreen;
