1. Add UI/UX (edit and Read mode) and generic code for onchange/onblur/onfocus on the UICustomtextfield.
2. Create CustomTextfield component that will be referenced in the schema (via component mapper).
   2.1: CustomTextfield will pass data (callback) to UICustomtextfield via props
3. Create corresponding eventhandler file `customtextfieldeventhandler` for the Customtextfield component.
   3.1: This eventhandler file will contain method's that will be specific to the cutomtextfield instance being used.
4. Now the specific usage of the Customtextfield would be communicated via keys passed to the Customtextfield via schema.
   4.1:
