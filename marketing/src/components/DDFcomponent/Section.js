import React, { useState } from 'react';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import Grid from '@mui/material/Grid';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';


const Section = (props) => {
    const { size, label, fields } = useFieldApi(props);
    const formoption = useFormApi()
    return <Stack sx={{ m: "1", p: "10px" }}>
        <Typography variant="h5" sx={{ mb: "1rem" }}>
            {label}
        </Typography>
        <Grid container spacing={2}>
            {fields.map((field) => (
                <Grid key={field.name} item xs={6}>
                    {formoption.renderForm([field])}
                </Grid>
            ))}
        </Grid>
    </Stack>
};

export default Section