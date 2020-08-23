import React, {useEffect} from 'react';
import MaterialTable from 'material-table';

export default function ApplicationReviewTable() {
    const [universityInfo, setUniversityInfo] = React.useState("Koç Üniversitesi");

    const [state, setState] = React.useState({
        columns: [
            { title: universityInfo + ' Dersin Kodu', field: 'intibakDersKodu' },
            { title: universityInfo + ' Dersin Adı', field: 'intibakDersinAdi' },
            { title: universityInfo + ' Kredi', field: 'intibakKredi', type: 'numeric' },
            { title: universityInfo + ' AKTS', field: 'intibakAkts', type:'numeric'},
            { title: universityInfo + ' Başarı Notu', field: 'intibakBasariNotu'},
            { title: 'FSMVU Dersin Kodu', field: 'fsmvuDersKodu' },
            { title: 'FSMVU Dersin Adı', field: 'fsmvuDersinAdi' },
            { title: 'FSMVU Kredi', field: 'fsmvuKredi', type: 'numeric' },
            { title: 'FSMVU AKTS', field: 'fsmvuAkts', type:'numeric'},
            { title: 'FSMVU Başarı Notu', field: 'fsmvuBasariNotu'},
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
                dersKodu: 'BLM103',
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

    //console.log(state.data);

    return (
        <MaterialTable
            title="İntibak Tablosu"
            columns={[
                {
                    title: state.columns[0].title,
                    field: 'intibakDersKodu',
                    cellStyle: {

                    },
                    headerStyle: {
                        backgroundColor: '#b07d62',
                        color:'white'
                    }
                },
                {
                    title: state.columns[1].title,
                    field: 'intibakDersinAdi',
                    headerStyle: {
                        backgroundColor: '#b07d62',
                        color:'white'
                    }
                },
                {
                    title: state.columns[2].title,
                    field: 'intibakKredi',
                    type: 'numeric',
                    headerStyle: {
                        backgroundColor: '#b07d62',
                        color:'white'
                    }
                },
                {
                    title: state.columns[3].title,
                    field: 'intibakAkts',
                    type:'numeric',
                    headerStyle: {
                        backgroundColor: '#b07d62',
                        color:'white'
                    }
                },
                {
                    title: state.columns[4].title,
                    field: 'intibakBasariNotu',
                    headerStyle: {
                        backgroundColor: '#b07d62',
                        color:'white'
                    }
                },
                {
                    title: state.columns[5].title,
                    field: 'fsmvuDersKodu',
                    headerStyle: {
                        backgroundColor: '#85182a',
                        color:'white'
                    }
                },
                {
                    title: state.columns[6].title,
                    field: 'fsmvuDersinAdi',
                    headerStyle: {
                        backgroundColor: '#85182a',
                        color:'white'
                    }
                },
                {
                    title: state.columns[7].title,
                    field: 'fsmvuKredi',
                    type:'numeric',
                    headerStyle: {
                        backgroundColor: '#85182a',
                        color:'white'
                    }
                },
                {
                    title: state.columns[8].title,
                    field: 'fsmvuAkts',
                    type:'numeric',
                    headerStyle: {
                        backgroundColor: '#85182a',
                        color:'white'
                    }
                },
                {
                    title: state.columns[9].title,
                    field: 'fsmvuBasariNotu',
                    headerStyle: {
                        backgroundColor: '#85182a',
                        color:'white'
                    }
                }
            ]}
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
            options={{
                rowStyle: {

                },
                cellStyle:{

                },
                headerStyle:{

                }
            }}
        />
    );
}
