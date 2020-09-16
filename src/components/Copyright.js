import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://fsm.edu.com.tr/">
                Fatih Sultan Mehmet Vakıf Üniversitesi
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
