import {Box, Grid2, Typography, Input, Slider} from "@mui/material";
import React from "react";
import {formatMoney} from "../utilities/InvestmentCalculations.tsx";

interface SliderProps {
    tooltipText: string;
    id: string;
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number
}

const InputSlider = (props: SliderProps) => {
    const handleSliderChange = (_event: Event, newValue: number | number[]) => {
        props.onChange(formatMoney(newValue as number))
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value === '' ? 0 : Number(event.target.value))
    }

    return (
        <Box sx={{width:250}}>
            <Typography id={"slider-label"}>
                Years to grow
            </Typography>
            <Grid2 container spacing={2} sx={{alignItems: 'center'}}>
                <Grid2 size={3}>
                    <Input
                        value={props.value}
                        size={"small"}
                        onChange={handleInputChange}
                        inputProps={{
                            step: props.step,
                            min: props.min,
                            max: props.max,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid2>
                <Grid2 size={9}>
                    <Slider
                        value={props.value}
                        onChange={handleSliderChange}
                    />
                </Grid2>
            </Grid2>

        </Box>
    )
}

export default InputSlider;