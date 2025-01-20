import {Paper} from "@mui/material";
import {MetaData} from "../utilities/InvestmentCalculations.tsx";

interface MetaDataProp {
    metaData: MetaData;
}

export function ResultDisplay (props: MetaDataProp) {

    // fix issue with the year value getting updated
    return (
        <>
            <Paper id={'resultText'}>
                <p>
                    Your initial investment of <strong>${props.metaData.initialInvestment}</strong> plus your
                    monthly investment of <strong>${props.metaData.monthlyAddition}</strong> at an
                    annualized interest rate of <strong>{props.metaData.interestRate}%</strong> will be
                    worth <strong>${props.metaData.totalValue.toFixed(2)}</strong> after{" "}
                    <strong>{props.metaData.years} year{props.metaData.years > 1 ? "s" : ""}</strong> when compounded monthly.
                </p>
            </Paper>
        </>
    );
}