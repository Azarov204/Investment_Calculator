import {SingleMonth} from "../utilities/InvestmentCalculations.tsx";

interface InvestmentProps {
    monthlyInvestmentData: SingleMonth[];
}

const InvestmentTable = (props: InvestmentProps) => {

    return (
        <div>
            <h1>Investment Growth Table</h1>
            {props.monthlyInvestmentData.length > 0 && (
                <table border={1}>
                    <thead>
                    <tr>
                        <th>Month</th>
                        <th>Monthly Investment</th>
                        <th>Total Investment</th>
                        <th>Monthly Interest</th>
                        <th>Total Interest</th>
                        <th>Total Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.monthlyInvestmentData.map((month) => (
                        <tr key={month.month}>
                            <td>{month.month}</td>
                            <td>{numberWithCommas(month.monthlyInvestment.toFixed(2))}</td>
                            <td>{numberWithCommas(month.totalInvestment.toFixed(2))}</td>
                            <td>{numberWithCommas(month.monthlyInterest.toFixed(2))}</td>
                            <td>{numberWithCommas(month.totalInterest.toFixed(2))}</td>
                            <td>{numberWithCommas(month.totalValue.toFixed(2))}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

function numberWithCommas(x : string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default InvestmentTable;