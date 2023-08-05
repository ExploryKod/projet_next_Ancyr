"use client";
import { Box, Grid, Typography, Button, FormControl, TextField, FormLabel } from "@mui/material";

export const GuestsSection: React.FC<{}> = () => {
  return <Box sx={{ marginTop: 2 }}>
    <Typography variant="h4">Guests</Typography>
    <Grid rowSpacing={4}>
        <Box sx={{ paddingTop: 2 }}>
            <GuestRow />
        </Box>
    </Grid>
    <Grid container rowSpacing={4} direction={"row"} alignItems={"center"} spacing={1} marginTop={2}>
        <Grid item>
            <Button variant="contained">Ajouter</Button>
        </Grid>
        <Grid item>
            <Button variant="contained">Suivant</Button>
        </Grid>
    </Grid>
  </Box>;
};

const GuestRow: React.FC<{}> = () => { 
    return (
        <Box>
            <Grid container direction={"row"} alignItems={"center"} spacing={1} >
                <Grid item >
                    <FormControl>
                        <FormLabel>Prénom</FormLabel>
                        <TextField/>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl>
                        <FormLabel>Nom</FormLabel>
                        <TextField/>
                    </FormControl>
                </Grid>
                <Grid item >
                    <FormControl>
                        <FormLabel>Âge</FormLabel>
                        <TextField/>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )

};