const formData = [
  {
    labelName: 'Name',
    typeInput: 'text',
    placeholderInput: 'e.g. Stephen King',
    labelClass:
      'flex flex-col text-[14px] text-denim font-sans font-normal mb-[24px] relative',
    inputEmpty: 'This field is required',
    inputEmptyClass: 'hidden',
    inputNameWrongClass: '',
  },
  {
    labelName: 'Address',
    typeInput: 'email',
    placeholderInput: 'e.g. stephenking@lorem.com',
    labelClass:
      'flex flex-col text-[14px] text-denim font-sans font-normal mb-[24px] relative',
    inputEmpty: 'This field is required',
    inputEmptyClass: 'hidden',
    inputEmailWrongClass: '',
  },
  {
    labelName: 'Phone Number',
    typeInput: 'tel',
    placeholderInput: 'e.g. +1 234 567 890',
    labelClass:
      'flex flex-col text-[14px] text-denim font-sans font-normal mb-[24px] relative',
    inputEmpty: 'This field is required',
    inputEmptyClass: 'hidden',
    inputTelWrongClass: '',
  },
];

export default formData;
