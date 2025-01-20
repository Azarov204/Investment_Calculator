
export interface SingleMonth {
    month: number,
    monthlyInvestment: number,
    totalInvestment: number,
    monthlyInterest: number,
    totalInterest: number,
    totalValue: number,
}

export interface MetaData {
    totalValue: number,
    totalInvestment: number,
    totalInterest: number,
    initialInvestment: number,
    monthlyAddition: number,
    interestRate: number,
    years: number,
}

export interface InvestmentCalculatorResult {
    monthlyData: Array<SingleMonth>;
    metaData: MetaData;
}

export function calculateMonthlyTable(initial: number, regAddition: number, rate: number, years: number): InvestmentCalculatorResult {

    const monthlyData: Array<SingleMonth> = [];

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
    monthlyData.push(firstMonth);

    for (let i = 2; i <= years*12; i++) {
        const prevMonth: SingleMonth = monthlyData[monthlyData.length - 1]

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
        monthlyData.push(currentMonth);
    }

    const resultLastIndex = monthlyData.length - 1;
    const metaData = {
        totalValue: monthlyData[resultLastIndex].totalValue,
        totalInvestment: monthlyData[resultLastIndex].totalInvestment,
        totalInterest: monthlyData[resultLastIndex].totalInterest,
        initialInvestment: initial,
        monthlyAddition: regAddition,
        interestRate: rate,
        years: years,
    }

    return {
        metaData,
        monthlyData
    };
}

export function calculateMonthlyInterest(principal: number, rate: number): number {
    const monthlyInterestRate = (rate/100)/12;
    const interest = principal * monthlyInterestRate;
    return formatMoney(interest);
}

export function formatMoney(money: number) : number {
    return parseFloat(money.toFixed(2))
}