import componentTypes from '@data-driven-forms/react-form-renderer/component-types';

const schema = {
    fields: [
        {
            component: 'section',
            label: "NITROGEN FORM",
            name: 'nitrogensubform',
            fields: [{
                component: componentTypes.TEXT_FIELD,
                name: 'nitrogen',
                label: 'Nitrogen',
                disabled: true,
                type: "number"
            },
            {
                component: componentTypes.TEXT_FIELD,
                name: 'phosphorous',
                label: 'Phosphorous',
                type: "decimal",
                methodtocallbeforeonblur: ["addnitrogen"],
                updatekeysforonblur: ["nitrogen"]
            },
            {
                component: componentTypes.TEXT_FIELD,
                name: 'potassium',
                label: 'Potassium',
                type: "number",
                methodtocallbeforeonblur: ["addnitrogen"],
                updatekeysforonblur: ["nitrogen"]
            },
            {
                component: componentTypes.TEXT_FIELD,
                name: 'calcium',
                label: 'Calcium',
                type: "number",
                methodtocallbeforeonblur: ["addnitrogen"],
                updatekeysforonblur: ["nitrogen"]
            }]
        },
        {
            component: 'section',
            label: "WATER FORM",
            name: 'watersubform',
            fields: [
                {
                    component: componentTypes.TEXT_FIELD,
                    name: 'eventdesc',
                    label: 'Describe the form',
                    type: "text",
                },
                {
                    component: componentTypes.TEXT_FIELD,
                    name: 'waterevent',
                    label: 'Number of event',
                    type: "number",
                    methodtocallbeforeonblur: ["addwaterevent"],
                    updatekeysforonblur: ["watereventarray"]
                }
            ]
        },
        {
            component: componentTypes.FIELD_ARRAY,
            name: 'watereventarray',
            fieldKey: 'field_array',
            fields: [
                {
                    component: componentTypes.TEXT_FIELD,
                    name: 'event',
                    label: 'Event',
                    type: "number",
                }
            ],
        }
    ],
}

export { schema }