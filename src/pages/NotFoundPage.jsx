import React from 'react';

import Card from '../components/UI/Card';

const NotFound = () => {
  return (
    <div style={{textAlign: 'center', margin: '25vh auto'}}>
      <Card>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </Card>
    </div>
  );
};

export default NotFound;
