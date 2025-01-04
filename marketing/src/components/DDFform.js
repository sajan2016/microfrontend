import React, { useState } from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import useFormApi from '@data-driven-forms/react-form-renderer/use-form-api';
import Customtextfield from './DDFcomponent/Customtextfield';
import Section from './DDFcomponent/Section';
import FieldArrayCustom from './DDFcomponent/FieldArrayCustom';
import { schema } from './../DDFSchema/Datacollection'

const DDFform = () => {
  const [values, setValues] = useState({});

  const componentMapper = {
    [componentTypes.TEXT_FIELD]: Customtextfield,
    'custom-component-type': Customtextfield,
    'section': Section,
    [componentTypes.FIELD_ARRAY]: FieldArrayCustom,
  };

  const FormTemplate = ({ formFields }) => {
    const { handleSubmit, onCancel } = useFormApi();

    const Button = ({ children, label, variant, ...props }) => {

      const getButtonStyle = (variant) => ({
        color: 'White',
        backgroundColor: variant === 'primary' ? 'RebeccaPurple' : '#888',
        padding: '8px 16px',
        borderRadius: 4,
        cursor: 'pointer',
        border: 'none',
        marginRight: 4,
      });

      return <button style={getButtonStyle(variant)} {...props}>
        {label}
      </button>
    }

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        {formFields}
        < Button type="submit" variant="primary" label="Submit" />
        <Button type="button" label="cancel" onClick={onCancel} />
      </form>
    );
  };


  return (
    <div>
      <FormRenderer
        componentMapper={componentMapper}
        FormTemplate={FormTemplate}
        schema={schema}
        onSubmit={(values) => alert(JSON.stringify(values))}
        onCancel={() => console.log('cancel action')}
      />
    </div>
  );
};

export default DDFform;