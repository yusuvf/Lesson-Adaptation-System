import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import Background from '../logo/cool-background.svg';

import {
    Link as RouterLink
} from "react-router-dom";
import logo from '../logo/FSMVU-TR-1.png';

function Homepage() {
    return (
        <Container style={{backgroundImage: `url(${Background})`}} maxWidth="md" style={{marginTop:"5%"}}><br/><br/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                    <img src={logo} style={{width:'240px'}} alt="Logo"/>
                </Grid>
                <Grid item xs={12} md={6} lg={6} style={{display:'grid',textAlign:'center',alignItems:'center'}}>
                    <Typography style={{fontFamily:'Roboto',fontWeight:'800'}} variant="h4" gutterBottom>
                        İntibak Başvuru Sistemi
                    </Typography>
                </Grid>
                <Grid style={{marginTop:'8vh',marginBottom:'6vh',fontFamily:'Roboto',fontWeight:'500'}} item xs={12} md={12} lg={12}>
                    <p>İntibak Başvurusu yapmak isteyen öğrenciler ve bu başvuruları onaylayıp düzenlemek isteyen akademsiyenler için geliştirilmiş otomasyon sistemine hoşgeldiniz.</p>
                </Grid>
                <Grid item xs={12} md={1}>
                </Grid>
                <Grid item xs={12} md={5}>
                    <LocalLibraryIcon style={{fontSize:"500%"}}/><br/><br/>
                    <RouterLink to="/application">
                        <Button variant="contained" color="primary" size="large">
                            Öğrenci İntibak Başvurusu
                        </Button>
                    </RouterLink>
                </Grid>
                <Grid item xs={12} md={5}>
                    <PersonPinIcon style={{fontSize:"500%"}}/><br/><br/>
                    <RouterLink to="/signin">
                        <Button variant="contained" color="primary" size="large">
                            Akademisyen Giriş
                        </Button>
                    </RouterLink>
                </Grid>
                <Grid item xs={12} md={1}>
                </Grid>
            </Grid><br/><br/>
        </Container>

);
}

export default Homepage;
