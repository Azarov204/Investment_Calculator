import NumberInputField from "../components/NumberInputField.tsx";
import {useState} from "react";
import {Button, Container, Grid2, Paper} from "@mui/material";
import {calculateMonthlyTable, SingleMonth, MetaData, InvestmentCalculatorResult} from "../utilities/InvestmentCalculations.tsx";
import InvestmentTable from "../components/InvestmentTable.tsx";
import {InvestmentGraph} from "../components/InvestmentGraph.tsx";
import {ResultDisplay} from "../components/ResultDisplay.tsx";

export function InvestmentCalculator() {

    const [ initialInvestment, setInitialInvestment ] = useState<number>(1000);
    const [ monthlyAddition, setMonthlyAddition ] = useState<number>(500);
    const [ interestRate, setInterestRate ] = useState<number>(7);
    const [ yearsToGrow, setYearsToGrow ] = useState<number>(1);
    const [ showResults, setShowResults ] = useState<boolean>(false);
    const [ monthlyDataResults, setMonthlyDataResults ] = useState<SingleMonth[]>([]);
    const [ metaDataResults, setMetaDataResults ] = useState<MetaData>({
        initialInvestment: 0,
        interestRate: 0,
        monthlyAddition: 0,
        totalInterest: 0,
        totalInvestment: 0,
        totalValue: 0,
        years: 0
    });

    const computeAndShowInterestTable = () => {
        const investmentCalculatorResults: InvestmentCalculatorResult = calculateMonthlyTable(initialInvestment, monthlyAddition, interestRate, yearsToGrow);
        setMonthlyDataResults(investmentCalculatorResults.monthlyData);
        setMetaDataResults(investmentCalculatorResults.metaData)
        setShowResults(true);
        console.log(monthlyDataResults)
    }

    return (
        <Container maxWidth={"xl"}>
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <p>Find out how your investment will grow over time with compound interest</p>
                </Grid2>
                <Grid2 size={6}>
                    <NumberInputField
                        id={"initialInvestment"}
                        label={"Initial Investment"}
                        value={initialInvestment}
                        onChange={setInitialInvestment}
                        tooltipText={"The amount of money you will invest up front"}
                    />
                </Grid2>
                <Grid2 size={6}>
                    <NumberInputField
                        id={"monthlyAddition"}
                        label={"Monthly addition"}
                        value={monthlyAddition}
                        onChange={setMonthlyAddition}
                        tooltipText={"How much money you will add monthly"}
                    />
                </Grid2>
                <Grid2 size={6}>
                    <NumberInputField
                        id={"interestRate"}
                        label={"Interest Rate"}
                        value={interestRate}
                        onChange={setInterestRate}
                        tooltipText={"The interest rate you expect to earn on your investment"}
                    />
                </Grid2>
                <Grid2 size={6}>
                    <NumberInputField
                        id={"yearsToGrow"}
                        label={"Years to grow"}
                        value={yearsToGrow}
                        onChange={setYearsToGrow}
                        tooltipText={"How long you will hold your investment"}
                    />
                </Grid2>
                <Grid2 size={12}>
                    <Button
                        onClick={() => computeAndShowInterestTable()}
                        variant={"contained"}
                    >
                        Calculate
                    </Button>
                </Grid2>
            </Grid2>
            {showResults && (
                <Grid2 container>
                    <Grid2>
                        <ResultDisplay metaData={metaDataResults} />
                    </Grid2>
                    <Grid2>
                        <InvestmentTable monthlyInvestmentData={monthlyDataResults} />
                    </Grid2>
                    <Grid2 size={12}>
                        <Paper>
                            <InvestmentGraph monthlyInvestmentData={monthlyDataResults} />
                        </Paper>
                    </Grid2>
                </Grid2>
            )}
        </Container>
    )
}