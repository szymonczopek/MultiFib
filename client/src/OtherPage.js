import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>Multifib</p>
      <p>Szymon Czopek 2.1</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};