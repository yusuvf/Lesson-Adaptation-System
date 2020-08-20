import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const columns = [
    { id: 'ad', label: 'Ad', minWidth: 170 },
    { id: 'soyad', label: 'Soyad', minWidth: 100 },
    { id: 'universite', label: 'Üniversite', minWidth: 170, align: 'right',},
    {id: 'girisYili', label: 'Giriş Yılı', minWidth: 170, align: 'right',},
    {id: 'girisTuru', label: 'Giriş Türü', minWidth: 170, align: 'right',},
    {id: 'tarih', label: 'Tarih', minWidth: 170, align: 'right',},
    { id: 'detay', label: 'Detay', minWidth: 170, align: 'right',},
];

function createData(ad, soyad, universite, girisYili, girisTuru, tarih,detay) {
    return {ad, soyad, universite, girisYili, girisTuru, tarih, detay};
}

function returnButton(id) {
    return(
        <Button href={"basvuruDetay=?"+id} id={id} variant="contained" color="primary">
            Başvuru Detay
        </Button>
    );
}
const rows = [
    createData('Deneme1', 'sDeneme1', 'FSMVU1', 1999, 'Dikey Geçiş', '01.01.2000', 0),
    createData('Deneme2', 'sDeneme2', 'FSMVU2', 2000, 'Yatay Geçiş', '01.01.2001', 1),
    createData('Deneme3', 'sDeneme3', 'FSMVU3', 2001, 'Diğer', '01.01.2002', 2),
    createData('Deneme4', 'sDeneme4', 'FSMVU4', 2002, 'Yatay Geçiş', '01.01.2003', 3),
    createData('Deneme5', 'sDeneme5', 'FSMVU5', 2003, 'Dikey Geçiş', '01.01.2004', 4),
    createData('Deneme6', 'sDeneme6', 'FSMVU6', 2004, 'Dikey Geçiş', '01.01.2005', 5),
    createData('Deneme7', 'sDeneme7', 'FSMVU7', 2005, 'Diğer', '01.01.2006', 6),
    createData('Deneme8', 'sDeneme8', 'FSMVU8', 2006, 'Yatay Geçiş', '01.01.2007', 7),
    createData('Deneme9', 'sDeneme9', 'FSMVU9', 2007, 'Dikey Geçiş', '01.01.2008', 8),
    createData('Deneme10', 'sDeneme10', 'FSMVU10', 2008, 'Diğer', '01.01.2009', 9),
    createData('Deneme11', 'sDeneme11', 'FSMVU11', 2009, 'Dikey Geçiş', '01.01.2010', 10),
    createData('Deneme12', 'sDeneme12', 'FSMVU12', 2010, 'Yatay Geçiş', '01.01.2011', 11),
    createData('Deneme13', 'sDeneme13', 'FSMVU13', 2011, 'Dikey Geçiş', '01.01.2012', 12),
    createData('Deneme14', 'sDeneme14', 'FSMVU14', 2012, 'Dikey Geçiş', '01.01.2013', 13),
    createData('Deneme15', 'sDeneme15', 'FSMVU15', 2013, 'Diğer', '01.01.2014', 14),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function ApplicationSelectionList() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id == "detay" ? returnButton(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
