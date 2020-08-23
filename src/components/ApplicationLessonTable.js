import React from 'react';
import MaterialTable from 'material-table';
import Grid from "@material-ui/core/Grid";

function ApplicationLessonTable() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Ders Kodu', field: 'derskodu' },
            { title: 'Ders Adı', field: 'dersadi' },
            { title: 'Kredi', field: 'kredi' },
            { title: 'AKTS', field: 'akts' },
            { title: 'Başarı Notu', field: 'basarinotu' },
        ],
        data: [
            { derskodu: 'MAT207', dersadi: 'Calculus I', kredi:"5", akts:"7", basarinotu:"BA", },
            { derskodu: 'MAT208', dersadi: 'Calculus II', kredi:"5", akts:"7", basarinotu:"AA", },
            { derskodu: 'FZ101', dersadi: 'Physic I', kredi:"5", akts:"7", basarinotu:"CC", },
            { derskodu: 'FZ102', dersadi: 'Physic II', kredi:"5", akts:"7", basarinotu:"CB", },
        ],
    });

    const student = {
        name : "Ahmet",
        UniverstyYear : 2012,
        lessons : [
            { derskodu: 'MAT207', dersadi: 'Calculus I', kredi:"5", akts:"7", basarinotu:"BA", },
            { derskodu: 'MAT208', dersadi: 'Calculus II', kredi:"5", akts:"7", basarinotu:"AA", },
        ]
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className="App">
                    <MaterialTable
                        title="Öğrenci Ders Listesi"
                        columns={state.columns}
                        data={state.data}
                        options={{
                            headerStyle: {
                                backgroundColor: '#01579b',
                                color: '#FFF',
                                textAlign:'left'
                            },
                            cellStyle: {
                                textAlign: 'left',
                                fontFamily:'roboto'
                            }
                        }}
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

export default ApplicationLessonTable;
