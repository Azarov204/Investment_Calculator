import InputField from "../components/InputField.tsx";
import {useState} from "react";
import {Button} from "@mui/material";
import {calculateMonthlyTable} from "../utilities/InvestmentCalculations.tsx";

export function InvestmentCalculator() {

    const [ initialInvestment, setInitialInvestment ] = useState<number>(1000);
    const [ monthlyAddition, setMonthlyAddition ] = useState<number>(500);
    const [ interestRate, setInterestRate ] = useState<number>(7);
    const [ yearsToGrow, setYearsToGrow ] = useState<number>(1);

    const computeAndShowInterestTable = () => {
        calculateMonthlyTable(initialInvestment, monthlyAddition, interestRate, yearsToGrow);
    }

    return (
        <>
            <InputField
                id={"initialInvestment"}
                label={"Initial Investment"}
                value={initialInvestment}
                type={"number"}
                onChange={setInitialInvestment}
                tooltipText={"The amount of money you will invest up front"}
            />
            <InputField
                id={"monthlyAddition"}
                label={"Monthly addition"}
                value={monthlyAddition}
                type={"number"}
                onChange={setMonthlyAddition}
                tooltipText={"How much money you will add monthly"}
            />
            <InputField
                id={"interestRate"}
                label={"Interest Rate"}
                value={interestRate}
                type={"number"}
                onChange={setInterestRate}
                tooltipText={"The interest rate you expect to earn on your investment"}
            />
            <InputField
                id={"yearsToGrow"}
                label={"Years to grow"}
                value={yearsToGrow}
                type={"number"}
                onChange={setYearsToGrow}
                tooltipText={"How long you will hold your investment"}
            />
            <Button
                onClick={() => computeAndShowInterestTable()}
            >
                Calculate
            </Button>
        </>
    )
}