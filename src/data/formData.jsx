const formData = [
  {
    labelName: 'Name',
    inputId: 'name',
    typeInput: 'text',
    inputNameValue: '',
    placeholderInput: 'e.g. Stephen King',
    labelClass:
      'flex flex-col text-[14px] text-denim font-sans font-normal mb-[24px] relative',
    inputEmpty: 'This field is required',
    inputNameEmptyClass: 'hidden',
    inputNameWrongClass: '',
  },
  {
    labelName: 'Address',
    inputId: 'email',
    typeInput: 'email',
    inputEmailValue: '',
    placeholderInput: 'e.g. stephenking@lorem.com',
    labelClass:
      'flex flex-col text-[14px] text-denim font-sans font-normal mb-[24px] relative',
    inputEmpty: 'This field is required',
    inputRegEmail: 'Error email address',
    inputRegEmailClass: 'hidden',
    inputEmailEmptyClass: 'hidden',
    inputEmailWrongClass: '',
  },
  {
    labelName: 'Phone Number',
    inputId: 'phone',
    typeInput: 'tel',
    inputPhoneValue: '',
    placeholderInput: 'e.g. +1 234 567 890',
    labelClass:
      'flex flex-col text-[14px] text-denim font-sans font-normal mb-[24px] relative',
    inputEmpty: 'This field is required',
    inputRegTel: 'Error phone number',
    inputRegTelClass: 'hidden',
    inputTelEmptyClass: 'hidden',
    inputTelWrongClass: '',
  },
];

export default formData;
