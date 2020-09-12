import React from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import {
    Link as RouterLink
} from "react-router-dom";
import logo from '../logo/FSMVU-TR-1.png';

function ApplicationConfirmedPage() {
    return (
        <Container maxWidth="md" style={{marginTop:"5%"}}><br/><br/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                    <img src={logo} style={{width:'240px'}} alt="Logo"/>
                </Grid>
                <Grid item xs={12} md={12} lg={12} style={{display:'grid',textAlign:'center',alignItems:'center', marginTop:'4vh'}}>
                    <Typography style={{fontFamily:'Roboto',fontWeight:'800'}} variant="h6" gutterBottom>
                        Başvurunuz Tamamlandı.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} style={{marginTop:'3vh'}}>
                    <RouterLink style={{textDecoration:'none'}} to="/">
                        <Button variant="contained" color="primary" size="large">
                            Ana Sayfa
                        </Button>
                    </RouterLink>
                </Grid>
            </Grid>
        </Container>

    );
}

export default ApplicationConfirmedPage;
