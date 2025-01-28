import {Box, Grid2, Typography} from "@mui/material";
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
}

const Slider = (props: SliderProps) => {

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        props.onChange(formatMoney(newValue as number))
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange()
    }


    return (
        <Box sx={{width:250}}>
            <Typography id={"slider-label"}>
                Years to grow
            </Typography>
            <Grid2 container spacing={2} sx={{alignItems: 'center'}}>
                <Grid2 size={12}>
                    <Slider
                        value={props.value}
                        onChange={handleSliderChange}
                    />
                </Grid2>
            </Grid2>
        </Box>
    )

}

export default Slider;