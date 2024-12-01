
type SingleMonth = {
    month: number,
    monthlyInvestment: number,
    totalInvestment: number,
    monthlyInterest: number,
    totalInterest: number,
    totalValue: number,
}

export function calculateMonthlyTable(initial: number, regAddition: number, rate: number, years: number): Array<SingleMonth> {

    let resultTable: Array<SingleMonth> = [];

    let monthlyInvestment: number = initial + regAddition;
    let totalInvestment: number = monthlyInvestment;
    let monthlyInterest: number = calculateMonthlyInterest(initial, rate);
    let totalValue: number = totalInvestment + monthlyInterest;

    let firstMonth: SingleMonth = {
        month: 0,
        monthlyInvestment,
        totalInvestment,
        monthlyInterest,
        totalInterest: monthlyInterest,
        totalValue,
    };
    resultTable.push(firstMonth);

    for(let i = 1; i < years*12; i++) {



    }

    return resultTable;
}

export function calculateMonthlyInterest(principal: number, rate: number): number {
    const monthlyInterestRate = (rate/100)/12;
    const interest = principal * monthlyInterestRate;
    return Math.round((interest + Number.EPSILON) * 100) / 100;
}