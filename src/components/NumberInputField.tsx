import {TextField, Tooltip} from "@mui/material";
import React from "react";
import {formatMoney} from "../utilities/InvestmentCalculations.tsx";

interface NumberInputFieldProps {
    tooltipText: string;
    id: string;
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    startAdornment?: string;
    endAdornment?: string;
}

const NumberInputField = (props: NumberInputFieldProps) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: number = parseFloat(e.target.value);
        value = props.min ? Math.max(props.min, value) : value;
        value = props.max ? Math.min(props.max, value) : value;
        props.onChange(formatMoney(value))
    }

    const textField = () => (
        <>
            <TextField
                id={props.id}
                label={props.label}
                value={props.value}
                type={"number"}
                onChange={onChange}
            />
        </>
    )

    return (
        <Tooltip title={props.tooltipText}>
            <>
                {textField()}
            </>
        </Tooltip>
    )

}

export default NumberInputField;