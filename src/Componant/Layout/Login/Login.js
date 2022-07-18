import React, { useRef, useState } from 'react';

import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const dasboard = useHistory();

    const PasswordRef = useRef();
    //  const PasswordConfirmRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();

        //   if (PasswordRef.current.value !== PasswordConfirmRef.current.value) {
        //       return setError('password do not match');
        //   }
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, PasswordRef.current.value);
            console.log('emailRef.current.value=', emailRef.current.value);
            console.log(
                'PasswordRef.current.value=',
                PasswordRef.current.value
            );
            dasboard.push('/dasboard');
        } catch {
            setError('falild to login');
            // alert('Weak password');
        }
        setLoading(false);
        console.log('eamil=', emailRef);
    }
    return (
        <>
            <Card className="align-items-center border-0">
                <Card.Body>
                    <h1 className="text-center mb-4"> Log In</h1>
                    {/* {currentUser && currentUser.email} */}
                    {error && <Alert varient="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={emailRef}
                                required
                            />
                        </Form.Group>
                        <Form.Group id="Password">
                            <Form.Label>Password</Form.Label>
                            {error && <Alert varient="danger">{error}</Alert>}
                            <Form.Control
                                type="Password"
                                ref={PasswordRef}
                                required
                            />
                        </Form.Group>
                        {/* <Form.Group id="Password-Confirm">
                            <Form.Label>Password Confermation</Form.Label>
                            <Form.Control
                                type="Password"
                                ref={PasswordConfirmRef}
                                required
                            />
                        </Form.Group> */}
                        <Button
                            disabled={loading}
                            className="w-100 my-4"
                            type="submit"
                        >
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an Account? <Link to="/sign-up">Sign Up</Link>{' '}
            </div>
        </>
    );
};

export default Login;
