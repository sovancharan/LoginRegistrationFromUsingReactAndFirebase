import React, { useRef, useState } from 'react';

import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
    const emailRef = useRef();

    const PasswordRef = useRef();
    const PasswordConfirmRef = useRef();
    const { signUp } = useAuth();
    const history = useHistory();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();

        if (PasswordRef.current.value !== PasswordConfirmRef.current.value) {
            return setError('password do not match');
        }
        try {
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value, PasswordRef.current.value);
            history.push('/login');
        } catch {
            setError('falild to create an account');
            alert('Weak password');
        }
        setLoading(false);
        console.log('eamil=', emailRef);
    }
    return (
        <>
            <Card className="align-items-center border-0">
                <Card.Body>
                    <h1 className="text-center mb-4"> Sign In</h1>
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
                        <Form.Group id="Password-Confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type="Password"
                                ref={PasswordConfirmRef}
                                required
                            />
                        </Form.Group>
                        <Button
                            disabled={loading}
                            className="w-100 my-4"
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
};

export default SignUp;
