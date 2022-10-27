import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import photo from '../../../Photo/photo.jpg';
import { useState } from 'react';



const Header = () => {

    const [theme, setTheme] = useState('Theme Day');
    const handleToggleTheme = () => {
        if (theme === 'Theme Night')
            setTheme('Theme Day');
        else
            setTheme('Theme Night')
    }

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <img
                    alt="logo"
                    src={photo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                />
                <Navbar.Brand><Link to='/'>Smart Learning</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">FAQ</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link onClick={handleToggleTheme} href="#features">{theme}</Nav.Link>

                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }


                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;