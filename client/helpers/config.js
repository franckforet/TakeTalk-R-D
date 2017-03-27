Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
  extraSignupFields: [
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
