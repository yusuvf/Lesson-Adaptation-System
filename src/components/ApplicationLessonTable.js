import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MaterialTable from 'material-table';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
function OgrenciBasvuru() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Ders Kodu', field: 'derskodu' },
            { title: 'Ders Adı', field: 'dersadi' },
            { title: 'Kredi', field: 'kredi' },
            { title: 'Akts', field: 'akts' },
            { title: 'Başarı Notu', field: 'basarinotu' },
        ],
        data: [
            { derskodu: 'MAT207', dersadi: 'Calculus I', kredi:"5", akts:"7", basarinotu:"BA", },
            { derskodu: 'MAT208', dersadi: 'Calculus II', kredi:"5", akts:"7", basarinotu:"AA", },
            { derskodu: 'FZ101', dersadi: 'Physic I', kredi:"5", akts:"7", basarinotu:"CC", },
            { derskodu: 'FZ102', dersadi: 'Physic II', kredi:"5", akts:"7", basarinotu:"CB", },
        ],
    });
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className="App">
                    <MaterialTable
                        title="Ders Listesi"
                        columns={state.columns}
                        data={state.data}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState((prevState) => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                        }}
                    />
                </div>
            </Grid>
        </Grid>
    );
}

export default OgrenciBasvuru;
