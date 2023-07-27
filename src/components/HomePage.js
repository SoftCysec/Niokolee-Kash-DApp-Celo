import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Welcome to NiokoleeKash!</p>
      <p>Get access to instant loans or earn interest by lending your funds to borrowers.</p>
      <p>Choose your preferred wallet to get started:</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mr-3">Celo Wallet</button>
        <button className="btn btn-primary">Metamask</button>
      </div>
    </div>
  );
};

export default HomePage;
