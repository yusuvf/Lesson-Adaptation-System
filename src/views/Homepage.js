import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import {
    Link as RouterLink
} from "react-router-dom";

function Homepage() {
    return (
        <Container maxWidth="md" style={{marginTop:"5%"}}><br/><br/>
            <Typography style={{fontFamily:'Roboto',fontWeight:'800'}} variant="h4" gutterBottom>
                Fatih Sultan Mehmet Vakıf Üniversitesi
            </Typography>
            <Typography style={{fontFamily:'Roboto',fontWeight:'800'}} variant="h4" gutterBottom>
                İntibak Başvuru Sistemi
            </Typography>
            <Grid style={{marginTop:'10vh',fontFamily:'Roboto',fontWeight:'500'}} item xs={12}>
                <p>İntibak Başvurusu yapmak isteyen öğrenciler ve bu başvuruları onaylayıp düzenlemek isteyen akademsiyenler için geliştirilmiş otomasyon sistemine hoşgeldiniz.</p>
            </Grid>
            <Grid container spacing={3} style={{marginTop:"12%"}}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={5} style={{borderRight: "3px solid black"}}>
                    <LocalLibraryIcon style={{fontSize:"500%"}}/><br/><br/>
                    <RouterLink to="/application">
                        <Button variant="contained" color="primary" size="large">
                            Öğrenci İntibak Başvurusu
                        </Button>
                    </RouterLink>
                </Grid>
                <Grid item xs={5}>
                    <PersonPinIcon style={{fontSize:"500%"}}/><br/><br/>
                    <RouterLink to="/signin">
                        <Button variant="contained" color="primary" size="large">
                            Akademisyen Giriş
                        </Button>
                    </RouterLink>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid><br/><br/>
        </Container>

);
}

export default Homepage;
