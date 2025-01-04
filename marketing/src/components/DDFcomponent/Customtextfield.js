import React, { useState } from 'react';
import useFieldApi from '@data-driven-forms/react-form-renderer/use-field-api';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import CustomUITextfield from '../../library/CustomUITextfield'
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import { eventhandlersetting } from './DDFcomponenteventhandler/CustomTextfieldeventhandler'

const Customtextfield = (props) => {
  const {
    customProp,
    label,
    input,
    isRequired,
    meta: { error, touched },
    FieldArrayProvider,
    dataType,
    type,
    disabled,
    ...rest
  } = useFieldApi(props);

  const formoption = useFormApi()

  const showPassword = true;
  // defaultValue: "Hello World",
  // InputProps: {
  //   startAdornment: <InputAdornment position="start">kg</InputAdornment>,
  //   endAdornment:
  //     <InputAdornment position="end">
  //       <IconButton
  //         aria-label="toggle password visibility"
  //         edge="end"
  //       >
  //         {showPassword ? <VisibilityOff /> : <Visibility />}
  //       </IconButton>
  //     </InputAdornment>
  // },



  const textfieldprops = {
    disabled: disabled || false,
    error,
    type,
    id: "outlined-error-helper-text",
    label,
    helperText: error ? "Incorrect entry data." : "",
    input,
    onBlur: (input, e) => {
      const formdata = {
        ...formoption.getState().values,
      }
      formdata[input.name] = e.target.value;
      const updatearray = {}
      if (props.methodtocallbeforeonblur && props.updatekeysforonblur) {
        props.methodtocallbeforeonblur.forEach((method, i) => {
          const datavalue = eventhandlersetting[method](formdata)
          const key = props.updatekeysforonblur[i];
          if (key !== "") {
            updatearray[key] = datavalue
          }
        })
      }
      Object.keys(updatearray).forEach((k) => {
        formoption.change(k, updatearray[k])
      })
      input.onBlur(e)
      input.onChange(e)

    },
    onChange: (input, e) => {
      input.onChange(e)
    },
    onFocus: () => {

    }
  }

  return <>
    <CustomUITextfield {...textfieldprops} />
  </>
};

export default Customtextfield