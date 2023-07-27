import React, { useState } from 'react';
// use the useContract file to import the useContract hook
import useContract from '../hooks/useContract.js';

const BorrowPage = () => {
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [durationInDays, setDurationInDays] = useState('');

  const lendingContract = useContract(); // Custom hook to get the contract instance

  const handleBorrow = async (e) => {
    e.preventDefault();
    try {
      const tx = await lendingContract.borrow(amount, interestRate, durationInDays);
      await tx.wait();
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h1>Borrow Page</h1>
      <form onSubmit={handleBorrow}>
        <div className="form-group">
          <label htmlFor="amount">Amount to Borrow:</label>
          <input type="number" className="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate:</label>
          <input type="number" className="form-control" id="interestRate" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="durationInDays">Duration (in days):</label>
          <input type="number" className="form-control" id="durationInDays" value={durationInDays} onChange={(e) => setDurationInDays(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Borrow</button>
      </form>
    </div>
  );
};

export default BorrowPage;
