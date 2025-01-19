import { useState } from "react";
import {SingleMonth} from "../utilities/InvestmentCalculations.tsx";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    styled,
    tableCellClasses,
    TablePagination,
} from "@mui/material";

interface InvestmentProps {
    monthlyInvestmentData: SingleMonth[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const InvestmentTable = (props: InvestmentProps) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const rowsPerPageOptions = [10, 20, 50, {label: "All Rows", value: props.monthlyInvestmentData.length} ];

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    return (
        <>
            <h2>Investment Growth Table</h2>
            {props.monthlyInvestmentData.length > 1 && (
                <>
                    <TableContainer component={Paper} sx={{maxWidth: "700px"}}>
                        <TablePagination
                            rowsPerPageOptions={rowsPerPageOptions}
                            component={"div"}
                            count={props.monthlyInvestmentData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    <Table aria-label="simple table" stickyHeader size={"small"}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Month</StyledTableCell>
                                <StyledTableCell>Monthly Investment</StyledTableCell>
                                <StyledTableCell>Total Investment</StyledTableCell>
                                <StyledTableCell>Monthly Interest</StyledTableCell>
                                <StyledTableCell>Total Interest</StyledTableCell>
                                <StyledTableCell>Total Value</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.monthlyInvestmentData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                <StyledTableRow key={row.month}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}, height: "10px"}}>
                                    <StyledTableCell>{row.month}</StyledTableCell>
                                    <StyledTableCell>${numberWithCommas(row.monthlyInvestment.toFixed(2))}</StyledTableCell>
                                    <StyledTableCell>${numberWithCommas(row.totalInvestment.toFixed(2))}</StyledTableCell>
                                    <StyledTableCell>${numberWithCommas(row.monthlyInterest.toFixed(2))}</StyledTableCell>
                                    <StyledTableCell>${numberWithCommas(row.totalInterest.toFixed(2))}</StyledTableCell>
                                    <StyledTableCell>${numberWithCommas(row.totalValue.toFixed(2))}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </>
            )}
        </>
    );
}

function numberWithCommas(x : string) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default InvestmentTable;