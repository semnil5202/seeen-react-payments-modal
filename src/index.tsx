import React, { useState } from 'react';

const MyModal = () => {
  const [greeting, setGreeting] = useState('hello');

  return <div>{greeting}</div>;
};

export default MyModal;
