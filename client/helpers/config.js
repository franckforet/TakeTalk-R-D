Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
  extraSignupFields: [
    {
      fieldName: 'email',
      fieldLabel: '@',
      inputType: 'text',
      visible: true,
    },
    {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    },
    {
        fieldName: 'meetingId',
        fieldLabel: 'meetingId',
        inputType: 'text',
        visible: false,
    }
  ]
});
