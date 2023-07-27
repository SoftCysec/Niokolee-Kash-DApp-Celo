import React from 'react';

const WalletSelection = () => {
  return (
    <div className="container">
      <h1>Wallet Selection</h1>
      <p>Please select your preferred wallet:</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mr-3">Celo Wallet</button>
        <button className="btn btn-primary">Metamask</button>
      </div>
    </div>
  );
};

export default WalletSelection;
