import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from "@material-ui/lab/Autocomplete";

import ApplicationLessonTable from '../components/ApplicationLessonTable'

export default function Application() {
  /*Bu kısım açılır buton içindir*/
  const [open, setOpen] = React.useState(false);

  const [FirstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [Mail, setMail] = React.useState("");
  const [University, setUniversity] = React.useState("");
  const [Faculty, setFaculty] = React.useState("");
  const [Year, setYear] = React.useState("");
  const [Department, setDepartment] = React.useState("");
  const [ApplicationType, setApplicationType] = React.useState("");

 const person = {
      name: FirstName,
      lastname: LastName,
      mail:Mail,
      university: University,
      faculty:Faculty,
      year:Year,
      department:Department,
      applicationType:ApplicationType,

     dersler:[

     ]
  }


  const [st, setSt] = React.useState({

    data: [{
      ad: 'melike',
      soyad: 'melike',
      fakulte: 'muhendislik fakultesi' ,
      bolum:'bilgisayar mühendisliği',
      mail:'m@gmail.com',
      universite:'fsmvu',
      girisYil:2018,
      basvuruTur:'Yatay Geçiş',
      dersler:{
        kod: 'MAT207',
        ad: 'Calculus I',
        kredi:5,
        akts:7,
        basariNotu:'BA'
      }
    },
    ],
  });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /*Bu kısım açılır buton içindir*/
  /*ComboBox 1 elemanları*/
  const years = [
    { year: '2020'},
    { year: '2019'},
    { year: '2018'},
    { year: '2017'},
    { year: '2016'},
    { year: '2015'},
    { year: '2014'},
    { year: '2013'},
    { year: '2012'},
    { year: '2011'},
    { year: '2010'},
    { year: '2009'},
    { year: '2008'},
    { year: '2007'},
    { year: '2006'},
    { year: '2005'},
    { year: '2004'},
    { year: '2003'},
    { year: '2002'},
    { year: '2001'},
  ];
  /*ComboBox 1 elemanları*/
  /*ComboBox 2 elemanları*/
  const gelisNeden = [
    { title: 'Yatay Geçiş'},
    { title: 'Dikey Geçiş'},
    { title: 'Diğer'},
  ];

  console.log(person)
  /*ComboBox 2 elemanları*/
  return (
    <React.Fragment>
      <Container maxWidth="md" style={{marginTop:"5%"}}>
      <Typography variant="h4" gutterBottom>
        Öğrenci İntibak Başvuru Ekranı
      </Typography><br/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="isim"
            name="isim"
            label="Ad"
            fullWidth
            autoComplete="given-name"
            onChange={e => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="soyad"
            name="soyad"
            label="Soyad"
            fullWidth
            autoComplete="family-name"
            onChange={e => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
              required
              id="mail"
              name="mail"
              label="Mail Adresiniz"
              fullWidth
              autoComplete="shipping address-level2"
              onChange={e => setMail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
              required
              id="universite"
              name="universite"
              label="Kayıtlı Olduğunuz Üniversite"
              fullWidth
              autoComplete="shipping postal-code"
              onChange={e => setUniversity(e.target.value)}
          /><br/><br/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="enstitu"
            name="enstitu"
            label="Enstitü/Fakülte"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={e => setFaculty(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              required
            id="bolum"
            name="bolum"
            label="Bölüm/Program"
            fullWidth
            autoComplete="shipping address-line2"
              onChange={e => setDepartment(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              required
              id="university-year"
              label="Üniversitenize Giriş Yılınız"
              fullWidth
              onChange={e => setYear(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Autocomplete
              id="application-type-combo"
              options={gelisNeden}
              getOptionLabel={(option) => option.title}
              fullWidth
              renderInput={(params) => <TextField {...params} label="Başvuru Türü" variant="outlined" />}
              onChange={(e,val) => setApplicationType(val.title)}
          />
        </Grid>
        <br/><br/><br/><br/><br/><br/><br/><br/>
          <label>&nbsp;&nbsp;&nbsp;Lütfen aşağıdaki tabloya kendi üniversitenizde almış olduğunuz dersleri giriniz.</label>
        </Grid>
        <br/><br/><br/>
        <Grid item xs={12}>
          <ApplicationLessonTable/>
        </Grid><br/><br/><br/>
        <Grid item xs={12} xs={7}>
          <div align="left">
            <label>Transkript Yükle : </label><input type="file" color="primary"></input>
          </div>
        </Grid><br/><br/><br/>
        <Grid item xs={12}>
        <Grid item xs={12}>
          <div>
            <Button variant="contained" color="primary"  style={{marginLeft:"90%"}} onClick={handleClickOpen}>
              Gönder
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">{"Değişiklikler Kaydedilsin mi?"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Bilgileri doğru girdiğinizden emin misiniz? Daha sonra verdiniğiz bilgiler üzerinde değişim yapamayacaksınız!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" onClick={handleClose} color="primary">
                  İptal
                </Button>
                <Button variant="outlined" onClick={handleClose} color="primary" autoFocus>
                  Gönder
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Grid><br/><br/><br/><br/><br/><br/>
      </Grid>
      </Container>
    </React.Fragment>
  );
}
