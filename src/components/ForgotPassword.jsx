// client/src/components/ForgotPassword.js
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { authService } from '../services/api';
import NotificationMessage from './NotificationMessage';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');
    
    try {
      const response = await authService.forgotPassword(email);
      setMessage(response.message);
      setEmail('');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="w-100" style={{ maxWidth: '450px' }}>
        <Card.Body className="p-4">
          <h2 className="text-center mb-4">Forgot Password</h2>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </Form.Group>

            <NotificationMessage message={message} type="success" />
            <NotificationMessage message={error} type="error" />

            <div className="d-grid">
              <Button 
                variant="primary" 
                type="submit" 
                disabled={isLoading}
                className="mt-3"
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ForgotPassword;