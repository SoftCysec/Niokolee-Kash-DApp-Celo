// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LendingContract {
    struct Loan {
        address borrower;
        uint256 amount;
        uint256 interestRate;
        uint256 repaymentAmount;
        uint256 dueDate;
        bool repaid;
    }

    Loan[] public loans;
    mapping(address => uint256[]) public borrowerLoans;

    event LoanCreated(uint256 loanId, address borrower, uint256 amount, uint256 dueDate);
    event LoanRepaid(uint256 loanId, address borrower, uint256 amount);

    function borrow(uint256 amount, uint256 interestRate, uint256 durationInDays) external {
        require(amount > 0, "Amount must be greater than zero");
        require(interestRate > 0, "Interest rate must be greater than zero");
        require(durationInDays > 0, "Duration must be greater than zero");

        uint256 repaymentAmount = calculateRepaymentAmount(amount, interestRate);
        uint256 dueDate = block.timestamp + (durationInDays * 1 days);

        Loan memory newLoan = Loan({
            borrower: msg.sender,
            amount: amount,
            interestRate: interestRate,
            repaymentAmount: repaymentAmount,
            dueDate: dueDate,
            repaid: false
        });

        uint256 loanId = loans.length;
        loans.push(newLoan);
        borrowerLoans[msg.sender].push(loanId);

        emit LoanCreated(loanId, msg.sender, amount, dueDate);
    }

    function repay(uint256 loanId) external payable {
        require(loanId < loans.length, "Invalid loan ID");
        Loan storage loan = loans[loanId];
        require(!loan.repaid, "Loan already repaid");
        require(msg.sender == loan.borrower, "Only borrower can repay the loan");
        require(msg.value == loan.repaymentAmount, "Incorrect repayment amount");
        require(block.timestamp <= loan.dueDate, "Loan is overdue");

        loan.repaid = true;

        emit LoanRepaid(loanId, msg.sender, msg.value);
    }

    function calculateRepaymentAmount(uint256 amount, uint256 interestRate) internal pure returns (uint256) {
        return amount + (amount * interestRate) / 100;
    }

    function getLoanCount() external view returns (uint256) {
        return loans.length;
    }

    function getBorrowerLoans(address borrower) external view returns (uint256[] memory) {
        return borrowerLoans[borrower];
    }
}
