import React from 'react';
import MaterialTable from 'material-table';

export default function MyTable() {
    let universityInfo = "Sabancı Üniversitesi"

    const [state, setState] = React.useState({
        columns: [
            { title: universityInfo + ' Dersin Kodu', field: 'intibakDersKodu' },
            { title: universityInfo + ' Dersin Adı', field: 'intibakDersinAdi' },
            { title: universityInfo + ' Kredi', field: 'intibakKredi', type: 'numeric' },
            { title: universityInfo + ' AKTS', field: 'intibakAkts', type:'numeric'},
            { title: universityInfo + ' Başarı Notu', field: 'intibakBasariNotu'},
            { title: 'FSMVU'+' Dersin Kodu', field: 'fsmvuDersKodu' },
            { title: 'FSMVU'+' Dersin Adı', field: 'fsmvuDersinAdi' },
            { title: 'FSMVU'+' Kredi', field: 'fsmvuKredi', type: 'numeric' },
            { title: 'FSMVU'+' AKTS', field: 'fsmvuAkts', type:'numeric'},
            { title: 'FSMVU'+' Başarı Notu', field: 'fsmvuBasariNotu'},
        ],
        data: [
            {
                intibakDersKodu: 'CS101',
                intibakDersinAdi: 'Computer Programming',
                intibakKredi: 3,
                intibakAkts: 6,
                intibakBasariNotu: 'B+',
                fsmvuDersKodu: 'BLM101',
                fsmvuDersinAdi: 'Bilgisayar Programlama',
                fsmvuKredi: 3,
                fsmvuAkts: 5,
                fsmvuBasariNotu: 'BA'
            },
            {
                intibakDersKodu: 'CS102',
                intibakDersinAdi: 'Veri Yapıları',
                intibakKredi: 3,
                intibakAkts: 6,
                intibakBasariNotu: 'C+',
                fsmvuDersKodu: 'BLM101',
                fsmvuDersinAdi: 'Bilgisayar Programlama',
                fsmvuKredi: 3,
                fsmvuAkts: 5,
                fsmvuBasariNotu: 'BA'
            }
        ],

    });

    return (
        <MaterialTable
            style={{alignContent:'right', textAlign:'right'}}
            title="İntibak Tablosu"
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
