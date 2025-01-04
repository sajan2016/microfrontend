import React, { useState } from 'react';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
};

const inputStyles = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: 4,
    boxSizing: 'border-box',
};

const paragraphStyle = {
    marginTop: 0,
    marginBottom: 4,
};

const requiredStyle = {
    color: 'red',
    marginLeft: 2,
};

const errorStyle = {
    color: 'orangered',
};


const CustomUITextfield = (props) => {
    const textfieldprops = {
        ...props,
    }
    return <Box
        sx={{ '& .MuiTextField-root': { width: '100%' } }}
        noValidate
        autoComplete="off"
    >
        <TextField {...textfieldprops}
            {...props.input}
            value={props.input.value}
            type="text"
            onBlur={(e) => {
                switch (props.type) {
                    case "number":
                        e.target.value = new Intl.NumberFormat('en-US').format(e.target.value)
                        props.onBlur(props.input, e)
                        break;
                    case "decimal":
                        e.target.value = new Intl.NumberFormat('en-US').format(e.target.value)
                        props.onBlur(props.input, e)
                        break;
                    case "text":
                    default:
                        props.onBlur(props.input, e)
                }
            }}
            onChange={(e) => {
                console.log(parseInt(e.target.value.slice(-1)), props.type)
                switch (props.type) {
                    case "number":
                        if (e.target.value.slice(-1) == "" || !isNaN(parseInt(e.target.value.slice(-1)))) {
                            props.onChange(props.input, e)
                        }
                        break;
                    case "decimal":
                        if (e.target.value.slice(-1) == "" || ((e.target.value.length > 1 && e.target.value.slice(-1) == "." && e.target.value.indexOf(".") == e.target.value.length - 1) || !isNaN(parseFloat(e.target.value.slice(-1))))) {
                            props.onChange(props.input, e)
                        }
                        break;
                    case "text":
                    default:
                        props.onChange(props.input, e)
                }
            }}

            onFocus={(e) => {
                e.target.value = e.target.value.replaceAll(",", "")
                props.onChange(props.input, e)
            }}
        />
    </Box>
};

export default CustomUITextfield