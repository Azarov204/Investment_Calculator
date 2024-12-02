
type SingleMonth = {
    month: number,
    monthlyInvestment: number,
    totalInvestment: number,
    monthlyInterest: number,
    totalInterest: number,
    totalValue: number,
}

export function calculateMonthlyTable(initial: number, regAddition: number, rate: number, years: number): Array<SingleMonth> {

    const resultTable: Array<SingleMonth> = [];

    let monthlyInvestment: number = initial + regAddition;
    let totalInvestment: number = monthlyInvestment;
    let monthlyInterest: number = calculateMonthlyInterest(initial, rate);
    let totalInterest: number = monthlyInterest;
    let totalValue: number = totalInvestment + monthlyInterest;

    const firstMonth: SingleMonth = {
        month: 1,
        monthlyInvestment,
        totalInvestment,
        monthlyInterest,
        totalInterest,
        totalValue,
    };
    resultTable.push(firstMonth);

    for (let i = 2; i <= years*12; i++) {
        const prevMonth: SingleMonth = resultTable[resultTable.length - 1]

        monthlyInvestment = regAddition;
        totalInvestment = prevMonth.totalInvestment + monthlyInvestment;
        monthlyInterest = calculateMonthlyInterest(prevMonth.totalValue, rate);
        totalInterest = prevMonth.totalInterest + monthlyInterest;
        totalValue = totalInvestment + totalInterest;

        const currentMonth: SingleMonth = {
            month: i,
            monthlyInvestment,
            totalInvestment,
            monthlyInterest,
            totalInterest,
            totalValue,
        }
        resultTable.push(currentMonth);
    }

    console.log(resultTable);
    console.log("Total investment: " + resultTable[resultTable.length - 1].totalValue);
    console.log("Total interest: " + resultTable[resultTable.length - 1].totalInterest);
    return resultTable;
}

export function calculateMonthlyInterest(principal: number, rate: number): number {
    const monthlyInterestRate = (rate/100)/12;
    const interest = principal * monthlyInterestRate;
    return Math.round((interest + Number.EPSILON) * 100) / 100;
}