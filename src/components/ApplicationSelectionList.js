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
import {useHistory} from "react-router";

const columns = [
    { id: 'ad', label: 'Ad', minWidth: 170, align: 'center'},
    { id: 'soyad', label: 'Soyad', minWidth: 100, align: 'center' },
    { id: 'universite', label: 'Üniversite', minWidth: 170, align: 'center'},
    { id: 'girisYili', label: 'Giriş Yılı', minWidth: 170, align: 'center'},
    { id: 'girisTuru', label: 'Giriş Türü', minWidth: 170, align: 'center'},
    { id: 'tarih', label: 'Tarih', minWidth: 170, align: 'center'},
    { id: 'detay', label: 'Detay', minWidth: 170, align: 'center'},
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: '60vh',
    },
});

export default function ApplicationSelectionList() {
    const history = useHistory();
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [rows,setRows] = React.useState([
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:0},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:1},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:2},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:3},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:4},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:5},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:6},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:7},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:8},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:9},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:10},
        {ad:'Adem', soyad:'Deneme', universite:'Fatih Sultan Mehmet Vakıf Üniversitesi', girisYili:1999, girisTuru:'Dikey Geçiş', tarih:'01.01.2000', detay:11},
    ]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    function returnButton(id) {

        return(
            <Button onClick={ () => {history.push('/dashboard/basvuruincele',{isAuthanticated:true, applicationId:id})} } id={id} style={{height:'60px'}} variant="contained" color="primary">
                Başvuru Detay
            </Button>
        );
    }

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
                                    style={{ minWidth: column.minWidth, backgroundColor:'#6c757d',color:'white'}}
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
                                                {column.id === "detay" ? returnButton(value) : value}
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
