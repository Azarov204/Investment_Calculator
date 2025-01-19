
export interface SingleMonth {
    month: number,
    monthlyInvestment: number,
    totalInvestment: number,
    monthlyInterest: number,
    totalInterest: number,
    totalValue: number,
}

export function calculateMonthlyTable(initial: number, regAddition: number, rate: number, years: number): Array<SingleMonth> {

    const resultTable: Array<SingleMonth> = [];

    let monthlyInvestment: number = formatMoney(initial + regAddition);
    let totalInvestment: number = formatMoney(monthlyInvestment);
    let monthlyInterest: number = calculateMonthlyInterest(initial, rate);
    let totalInterest: number = formatMoney(monthlyInterest);
    let totalValue: number = formatMoney(totalInvestment + monthlyInterest);

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

        monthlyInvestment = formatMoney(regAddition);
        totalInvestment = formatMoney(prevMonth.totalInvestment + monthlyInvestment);
        monthlyInterest = calculateMonthlyInterest(prevMonth.totalValue, rate);
        totalInterest = formatMoney(prevMonth.totalInterest + monthlyInterest);
        totalValue = formatMoney(totalInvestment + totalInterest)

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

    return resultTable;
}

export function calculateMonthlyInterest(principal: number, rate: number): number {
    const monthlyInterestRate = (rate/100)/12;
    const interest = principal * monthlyInterestRate;
    return formatMoney(interest);
}

export function formatMoney(money: number) : number {
    return parseFloat(money.toFixed(2))
}