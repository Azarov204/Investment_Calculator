import {TextField, Tooltip} from "@mui/material";
import PropTypes from "prop-types";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const InputField = (props: { onChange: (arg0: any) => void; id: string | undefined; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; value: unknown; type: string | (string & {}) | undefined; tooltipText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {

    const onChange = (e: { target: { value: any; }; }) => {
        props.onChange(e.target.value)
    }

    const textField = () => (
        <>
            <TextField
                id={props.id}
                label={props.label}
                value={props.value}
                type={props.type}
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

InputField.propTypes = {
    tooltipText: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    startAdornment: PropTypes.string,
    endAdornment: PropTypes.string,
}

export default InputField;