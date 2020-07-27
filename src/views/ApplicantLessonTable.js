import React from 'react';
import MaterialTable from 'material-table';

export default function IntibakTablo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Dersin Kodu', field: 'derskodu' },
            { title: 'Dersin Adı', field: 'dersadi' },
            { title: 'Kredi', field: 'kredi', type: 'numeric' },
            { title: 'AKTS', field: 'akts', type: 'numeric' },
            { title: 'Başarı Notu', field: 'basarinotu'},
        ],
        data: [
            { derskodu: 'HUM203', dersadi: 'Major Works of Ottoman Culture', kredi: 3, akts: 6 , basarinotu:'C-'},
            { derskodu: 'HUM203', dersadi: 'Major Works of Ottoman Culture', kredi: 3, akts: 6 , basarinotu:'C-'},
            { derskodu: 'HUM203', dersadi: 'Major Works of Ottoman Culture', kredi: 3, akts: 6 , basarinotu:'C-'},
            { derskodu: 'HUM203', dersadi: 'Major Works of Ottoman Culture', kredi: 3, akts: 6 , basarinotu:'C-'},
            { derskodu: 'HUM203', dersadi: 'Major Works of Ottoman Culture', kredi: 3, akts: 6 , basarinotu:'C-'},
            { derskodu: 'HUM203', dersadi: 'Major Works of Ottoman Culture', kredi: 3, akts: 6 , basarinotu:'C-'},
        ],
    });
    let universityInfo = "Sabanci Üniversitesi";

    return (
        <MaterialTable
            title="Öğrenci Dersleri"
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
    );
}
