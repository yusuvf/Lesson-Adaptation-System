import React, {useEffect} from 'react';
import MaterialTable from 'material-table';

export default function ApplicationReviewTable() {
    const [universityInfo, setUniversityInfo] = React.useState("Sabancı Üniversitesi");

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
            }
        ],
    });

    const [dbLessons, setDbLessons] = React.useState({
        lessons: [
            {
                dersKodu: 'blm102',
                dersIsmi: 'Veri Yapıları',
                dersKredi: 5,
                dersAkts: 6,

            },
            {
                dersKodu: 'blm103',
                dersIsmi: 'Veri Yapıları2',
                dersKredi: 5,
                dersAkts: 6,
            },
            {
                dersKodu: 'blm104',
                dersIsmi: 'Veri Yapıları3',
                dersKredi: 5,
                dersAkts: 6,
            }
        ]
    });


    useEffect(() => {
        for (let i = 0; i<state.data.length; i++){
            for (let k = 0; k<dbLessons.lessons.length; k++ ){
                if(state.data[i].fsmvuDersKodu === dbLessons.lessons[k].dersKodu){
                    state.data[i].fsmvuDersinAdi = dbLessons.lessons[k].dersIsmi;
                    state.data[i].fsmvuAkts = dbLessons.lessons[k].dersAkts;
                    state.data[i].fsmvuKredi = dbLessons.lessons[k].dersKredi;
                }
            }
        }
    });

    console.log(state.data);

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
