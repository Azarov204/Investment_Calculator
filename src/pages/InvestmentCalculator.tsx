import NumberInputField from "../components/NumberInputField.tsx";
import {useState} from "react";
import {Button} from "@mui/material";
import {calculateMonthlyTable, SingleMonth} from "../utilities/InvestmentCalculations.tsx";
import InvestmentTable from "../components/InvestmentTable.tsx";

export function InvestmentCalculator() {

    const [ initialInvestment, setInitialInvestment ] = useState<number>(1000);
    const [ monthlyAddition, setMonthlyAddition ] = useState<number>(500);
    const [ interestRate, setInterestRate ] = useState<number>(7);
    const [ yearsToGrow, setYearsToGrow ] = useState<number>(1);
    const [ showResults, setShowResults ] = useState<boolean>(false);
    const [ results, setResults ] = useState<SingleMonth[]>([]);

    const computeAndShowInterestTable = () => {
        setResults(calculateMonthlyTable(initialInvestment, monthlyAddition, interestRate, yearsToGrow));
        setShowResults(true);
        console.log(results)
    }

    return (
        <>
            <NumberInputField
                id={"initialInvestment"}
                label={"Initial Investment"}
                value={initialInvestment}
                onChange={setInitialInvestment}
                tooltipText={"The amount of money you will invest up front"}
            />
            <NumberInputField
                id={"monthlyAddition"}
                label={"Monthly addition"}
                value={monthlyAddition}
                onChange={setMonthlyAddition}
                tooltipText={"How much money you will add monthly"}
            />
            <NumberInputField
                id={"interestRate"}
                label={"Interest Rate"}
                value={interestRate}
                onChange={setInterestRate}
                tooltipText={"The interest rate you expect to earn on your investment"}
            />
            <NumberInputField
                id={"yearsToGrow"}
                label={"Years to grow"}
                value={yearsToGrow}
                onChange={setYearsToGrow}
                tooltipText={"How long you will hold your investment"}
            />
            <Button
                onClick={() => computeAndShowInterestTable()}
            >
                Calculate
            </Button>
            {showResults && (
                <>
                    <InvestmentTable monthlyInvestmentData={results} />
                </>
            )}
        </>
    )
}