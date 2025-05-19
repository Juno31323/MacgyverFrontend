// 대출 이자 계산기 (월 납입)
export function calculateLoan(loanAmount, interestRate, period) {
    const monthlyRate = interestRate / 12 / 100;
    const denominator = Math.pow(1 + monthlyRate, period) - 1;
  
    const monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, period) / denominator;
  
    const totalPayment = monthlyPayment * period;
    const totalInterest = totalPayment - loanAmount;

    return {
      monthlyPayment: Math.round(monthlyPayment),// 월납입금
      totalPayment: Math.round(totalPayment), //총 납부금
      totalInterest: Math.round(totalInterest), // 총 이자
    };
  }