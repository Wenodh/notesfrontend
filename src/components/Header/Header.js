import React, { useEffect } from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Form,
    FormControl,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';

function Header({ setSearch }) {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    useEffect(() => {}, [userInfo]);
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>
                    {userInfo ? (
                        <Link to="/mynotes">Notes</Link>
                    ) : (
                        <Link to="/">Notes</Link>
                    )}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        {userInfo && (
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Form>
                        )}
                    </Nav>
                    <Nav>
                        {userInfo ? (
                            <>
                                <Nav.Link>
                                    <Link to="/mynotes">My Notes</Link>
                                </Nav.Link>
                                <NavDropdown
                                    title={`${userInfo.name}`}
                                    id="collapsible-nav-dropdown"
                                >
                                    <NavDropdown.Item>
                                        <Link to="/profile">My Profile</Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <Nav.Link>
                                <Link to="/login">Login</Link>
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
