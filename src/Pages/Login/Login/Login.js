import React, { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithubSquare, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext);

    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                setError('');
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })

    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-dark mb-3 fw-bolder'>Login</h1>
            <div className='row d-flex justify-content-center'>
                <div className="col-9 col-md-7 ">

                    <div className='d-flex m-2'>
                        <Button className='d-inline mx-2' variant="success" onClick={() => providerLogin(GoogleProvider)}><FaGoogle></FaGoogle> Login with Google  <FaGoogle></FaGoogle></Button>

                        <Button variant="success" onClick={() => providerLogin(GithubProvider)}><FaGithubSquare></FaGithubSquare> Login with Github <FaGithubSquare></FaGithubSquare></Button>
                    </div>

                    <ButtonGroup vertical className='mx-auto w-100 gap-3 '>
                        <Form className='w-100' onSubmit={handleSubmit}>
                            <Form.Group className="mb-1 " controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-1 w-100" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" />
                            </Form.Group>
                            <Button variant="success" type="submit" className=' mt-3'>
                                Submit
                            </Button>
                            <br />
                            <strong className='text-danger'>{error}</strong>
                        </Form>
                        <p>Go to registration Pages? <Link to={'/register'}>Register Now</Link></p>


                    </ButtonGroup>
                </div>

            </div>
        </div>
    );
};

export default Login;

