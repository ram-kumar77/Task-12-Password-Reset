import React from 'react';
import { Alert } from 'react-bootstrap';

const NotificationMessage = ({ message, type }) => {
  if (!message) return null;

  return (
    <Alert variant={type === 'error' ? 'danger' : 'success'} className="mt-3 mb-3">
      {message}
    </Alert>
  );
};

export default NotificationMessage;