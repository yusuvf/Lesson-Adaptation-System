import React, {useState} from "react";
import {Button, Paper, List, ListItem, Grid } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../components/Copyright";
import {Link as RouterLink, Route} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BarChartIcon from "@material-ui/icons/BarChart";
import {PartyMode} from "@material-ui/icons";

/*
const yeniDizi=[

]

for (let i=0 ;i<dbDizi.length; i++){
    yeniDizi.push(
        {
            name: dbDizi[i].dersAd
        }
    )
}

 */

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function LessonPoolPage() {

    //This array is main array.
    const ListeElemanlari = [];

    //Teacher datas that comes from database
    const [teachers,setTeachers]= React.useState([
        { title: 'Musa Aydın'},
        { title: 'Berna Kiraz'},
        { title: 'Ali Nizam',},
    ]);
    //Term datas.
    const [term, setTerm] = React.useState([
        { term: 'Güz'},
        { term: 'Bahar'},
        { term: 'Yaz',},
    ]);

    //Subject datas that comes from database.
    const [subjects,setSubjects] = React.useState([
        { name: 'Veri Yapıları'},
        { name: 'Bilgisayar Programlama I'},
        { name: 'Veri Bilimi',},
        { name: 'Veri Yapıları1'},
        { name: 'Bilgisayar Programlama I1'},
        { name: 'Veri Bilimi1'},
        { name: 'Veri Yapıları2'},
        { name: 'Bilgisayar Programlama I2'},
        { name: 'Veri Bilimi2'},
    ]);

    React.useEffect(() => {
        console.log(subjects)
        setSubjects([
            { name: 'Veri Yapıları'},
        ])
        console.log(subjects)
    },[]);


    //This loop converts data which comes from database to our format.
    for (let x = 0; x<subjects.length; x++){
        ListeElemanlari[x] = {name:subjects[x].name,box:0, selected:false};
    }

    const classes = useStyles();

    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const mainListItems = (
        <div>
            <RouterLink to="/dashboard">
                <ListItem  button >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText style={{textDecoration:'none' }} primary="İntibak Başvuruları" />
                </ListItem>
            </RouterLink>
            <RouterLink to="/dashboard/akademisyenduzenle">
                <ListItem button >
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Akademisyen Düzenleme" />
                </ListItem>
            </RouterLink>
            <RouterLink to="/dashboard/dersduzenle">
                <ListItem button>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ders Düzenleme" />
                </ListItem>
            </RouterLink>
            <RouterLink to="/dashboard/dershavuzu">
                <ListItem button>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ders Havuzu" />
                </ListItem>
            </RouterLink>
        </div>
    );

    const [items,setItems] =useState(ListeElemanlari);

    function generateMarkUp(iitems) {
        return(
            <Paper style={{height:'50vh', overflow: 'auto'}}>
                <List>
                    {iitems.map(item => <ListItem><Checkbox onChange={() => handleCheckboxChange(item)} checked={item.selected}/><span>{item.name}</span></ListItem>)}
                </List>
            </Paper>
        );
    }

    const [leftside, rightside] = items.reduce((acc,cur) =>{
            cur.box === 0 ? acc[0].push(cur) : acc[1].push(cur);
            return acc;
        }, [[], []]
    );

    function handleCheckboxChange(item) {
        const newItems = [...items];
        const index = items.findIndex(i => i === item);
        newItems[index].selected = !newItems[index].selected;
        setItems(newItems);
    }

    function moveRight() {
        const newItems = items.map(item =>({...item,box: item.selected ? 1 : item.box}) );
        setItems(newItems);
    }

    function moveLeft() {
        const newItems = items.map(item =>({...item,box: item.selected ? 0 : item.box}) );
        setItems(newItems);
    }

    const [value,setValue] = useState("")

    let [donem,setDonem] = useState("");
    function lastPhase() {
        if((value.title != null) && donem != ""){
            value.subjects = rightside;
            value.term = donem;
            console.log(value)
            alert("Kayıt işlemi başarılı")
            return value;
        }
        else{
            alert("Lütfen Öğretim Görevlisi ve Dönem Alanlarını Boş Bırakmayınız.")
        }

    }

    const [hocaDersi,setHocaDersi] = [
        { name: 'Bilgisayar Programlama I',},
        { name: 'Veri Bilimi'},
        { name: 'Veri Yapıları1'},
        { name: 'Bilgisayar Programlama I1'},
    ];

    function giveValueFromTeacher(value) {
        setValue(value);
        //Bu hocadangelen2 değeri veritabanından gelen hocaya göre değişen derslerdir. hoca adına value.title ile erişebilirsiniz.

        //setHocaDersi(Databaseden gelecek veri burada çalışmalı)

        //Before doing seperate firstly do all boxes 0 to adjust all lists.
        for (let b =0; b<=items.length-1; b++){
            items[b].box = 0;
            items[b].selected = false;
        }

        //This algorithm works to seperate classes as right and left.
        for (let a =0; a<=hocaDersi.length-1; a++){
            for (let b =0; b<=items.length-1; b++){
                if(hocaDersi[a].name == items[b].name){
                    items[b].box = 1;
                    items[b].selected = true;
                }
            }
        }
    }

    function funcForTerm(deger) {
        value.term = deger;
        setDonem(deger);
    }

    const [searchable, setSearchable] = useState("");

    function searchArea(e) {
        var s = e.target.value;
        setSearchable(s);
    }
    return(
    <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" style={{backgroundColor: "#457b9d"}} className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    FSMVÜ İntibak, Akademisyen ve Ders Yönetim Sistemi
                </Typography>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <ExitToAppIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>{mainListItems}</List>
        </Drawer>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container style={{padding:'2vw'}} maxWidth="lg" className={classes.container}>
                <Paper variant="outlined" style={{backgroundColor:'#f3efec'}}>
                    <Grid container style={{padding:'2vw'}}>
                        <Grid item xs={12} style={{height:'8vh',textAlign:'left' , fontSize:'22px', fontWeight:'900'}}>
                           Ders Havuzu Düzenleme
                        </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    id="teacher"
                                    options={teachers}
                                    getOptionLabel={(option) => option.title}
                                    style={{ width: "18vw", backgroundColor:'white'}}
                                    onChange={(event, value) => giveValueFromTeacher(value)}
                                    renderInput={(params) => <TextField {...params} label="Öğretim Görevlisi Seçiniz" variant="outlined" />}
                                /><br/>
                            </Grid>
                            <Grid item xs={1}>
                                <div>

                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <Autocomplete
                                    id="term"
                                    options={term}
                                    getOptionLabel={(option) => option.term}
                                    style={{ width: "18vw",  backgroundColor:'white', visibility: value.title == undefined ? 'hidden':'visible'}}
                                    onChange={(event, v) => funcForTerm(v.term)}
                                    renderInput={(params) => <TextField {...params} label="Dönem Seçiniz" variant="outlined" />}
                                /><br/><br/>
                            </Grid>
                            <Grid item xs={12} style={{ marginTop:"5vh", marginBottom:'2vh'}}>
                                <TextField  style={{float:'left', width: "18vw",  backgroundColor:'white'}}
                                            onKeyUp={(event) => searchArea(event)}
                                            id="outlined-basic" label="Outlined" variant="outlined" label="Arama"/><br/><br/>
                            </Grid>
                            <Grid item xs={5}>
                                {
                                    generateMarkUp( leftside.filter(item => item.name.substring(0, searchable.length).toLowerCase() === searchable.toLocaleLowerCase() ))
                                }
                            </Grid>
                            <Grid item xs={2} container direction="column" justify="center">
                                <Button onClick={moveRight}>{'>'}</Button>
                                <Button onClick={moveLeft}>{'<'}</Button>
                            </Grid>
                            <Grid item xs={5}>
                                {generateMarkUp(rightside)}
                            </Grid>
                            <Grid item xs={12}>
                                <Button  style={{marginLeft:"0%", width:'8%'}} variant="contained" color="primary" onClick={lastPhase}>Kaydet</Button>
                            </Grid>
                        </Grid>
                </Paper>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    </div>
    );
}
