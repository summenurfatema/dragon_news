import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const [error, setError] = useState()
    const { signIn } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password)



        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => {
                console.error(error)
                setError(error.message)

            })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <p>{error}</p>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>

    );
};

export default Login;
