/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import FieldArray from '@data-driven-forms/react-form-renderer/field-array';
import { Stack, Grid } from '@mui/material';

const ArrayItem = ({ fields, fieldIndex, name, remove }) => {
    const { renderForm } = useFormApi();
    const editedFields = fields.map((field) => ({ ...field, name: `${name}.${field.name}` }));

    return (
        <Stack sx={{ m: "10px" }}>
            {renderForm(editedFields)}
        </Stack>
    );
};

const FieldArrayCustom = (props) => {
    const { fieldKey, arrayValidator, title, description, fields, itemDefault, meta, ...rest } = useFieldApi(props);
    const { dirty, submitFailed, error } = meta;
    const isError = (dirty || submitFailed) && error && typeof error === 'string';

    return (
        <FieldArray key={fieldKey} name={rest.input.name} validate={arrayValidator}>
            {(cosi) => (
                <Grid container spacing={2} sx={{ mb: "1rem" }}>
                    {cosi.fields.map((name, index) => (
                        <Grid item xs={4} key={`${name || fieldKey}-${index}`}>
                            <ArrayItem
                                fields={fields}
                                name={name}
                                fieldKey={fieldKey}
                                fieldIndex={index}
                                remove={cosi.fields.remove}
                            />
                        </Grid>
                    ))}
                    {isError && error}
                </Grid>
            )}
        </FieldArray>
    );
};

export default FieldArrayCustom