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
import Copyright from '../components/Copyright';

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

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /*Bu kısım açılır buton içindir*/

  const gelisNeden = [
    { title: 'Yatay Geçiş'},
    { title: 'Dikey Geçiş'},
    { title: 'Diğer'},
  ];

  return (
    <React.Fragment>
      <Container maxWidth="md" style={{marginTop:"5%", marginBottom:"5vh"}}>
         <Grid style={{marginTop:'10vh'}} container spacing={3}>
            <Grid item xs={12} sm={12} style={{marginBottom:'4vh'}}>
              <Typography style={{fontWeight:'800'}} variant="h4" gutterBottom>
                  Öğrenci İntibak Başvuru Ekranı
              </Typography><br/>
          </Grid>
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
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="universite"
                name="universite"
                label="Kayıtlı Olduğunuz Üniversite"
                fullWidth
                autoComplete="shipping postal-code"
                onChange={e => setUniversity(e.target.value)}
            />
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
             <Grid item xs={12} sm={4} >
             </Grid>
            <Grid item xs={12} sm={4} style={{marginTop:'2vh'}} >
                <Autocomplete
                    id="application-type-combo"
                    options={gelisNeden}
                    getOptionLabel={(option) => option.title}
                    fullWidth
                    renderInput={(params) => <TextField {...params} label="Başvuru Türü" variant="outlined" />}
                    onChange={(e,val) => setApplicationType(val.title)}
                />
            </Grid>
             <Grid item xs={12} sm={4} >
             </Grid>
            <Grid style={{marginTop:'8vh', fontWeight:'500', fontFamily:'Roboto'}} item xs={12}>
              <p>Lütfen aşağıdaki tabloya kendi üniversitenizde almış olduğunuz dersleri giriniz. Sağ üstteki + butonuna basarak ders ekleyebilirsiniz. Buna ek olarak Transkriptinizi de eklemeyi lütfen unutmayın.</p>
            </Grid>
             <Grid item xs={12}>
                 <ApplicationLessonTable/>
             </Grid>
             <Grid style={{marginTop:'5vh'}} item xs={12} sm={6}>
                 <div style={{float:'left'}}>
                     <label>Transkript Yükle : </label><input type="file" color="primary"></input>
                 </div>
             </Grid>
             <Grid style={{marginTop:'5vh'}} item xs={12} sm={6}>
                 <div style={{float:'right'}}>
                     <Button variant="contained" color="primary" onClick={handleClickOpen}>
                         Başvuruyu Tamamla
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
             </Grid>
             <Grid style={{marginTop:'5vh'}} item xs={12} sm={12}>
                 <Copyright/>
             </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
