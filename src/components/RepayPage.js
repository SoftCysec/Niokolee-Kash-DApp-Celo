import React, { useState } from 'react';
// import { Contract } from '@ethersproject/contracts';
import useContract from '../hooks/useContract.js';

const RepayPage = () => {
  const [loanId, setLoanId] = useState('');
  const [amount, setAmount] = useState('');

  const lendingContract = useContract(); // Custom hook to get the contract instance

  const handleRepay = async (e) => {
    e.preventDefault();
    try {
      const tx = await lendingContract.repay(loanId, amount);
      await tx.wait();
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h1>Repay Page</h1>
      <form onSubmit={handleRepay}>
        <div className="form-group">
          <label htmlFor="loanId">Loan ID:</label>
          <input type="text" className="form-control" id="loanId" value={loanId} onChange={(e) => setLoanId(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount to Repay:</label>
          <input type="number" className="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Repay</button>
      </form>
    </div>
  );
};

export default RepayPage;
