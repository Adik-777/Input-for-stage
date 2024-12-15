import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Steps from './components/Steps';
import Title from './components/Title';
import Button from './components/Button';
import nextStepBtn from './data/nextStepBtn';
import goBackBtn from './data/goBackBtn';
import titleAray from './data/titleAray';
import subTitleAray from './data/subTitleAray';
import totalResultForm from './data/totalResultForm';
import formData from './data/formData';
import inputEmptyClass from './classCss/inputEmptyClass';
import inputErrorBorder from './classCss/inputErrorBorder';

function App() {
  const [isClicked, setClicked] = useState(0);
  const [stepClicked, setStepClicked] = useState('stepNumberActive');
  const [inputError, setInputError] = useState();
  const [inputErrorText, setInputErrorText] = useState('hidden');
  const [inputRegTelClass, setInputRegTelClass] = useState('hidden');
  const [inputRegEmailClass, setInputRegEmailClass] = useState('hidden');
  const [backHandleClass, setBackHandleClass] = useState(goBackBtn.className);
  const [titleClass, setTitleClass] = useState();
  const regexPhoneNumbers =  /[+]{1}[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateInput = () => {
      if (
        !regexEmail.test(formData[1].inputEmailValue) ||
        !regexPhoneNumbers.test(formData[2].inputPhoneValue)
      ) {
             
      !regexEmail.test(formData[1].inputEmailValue) ? setInputRegEmailClass(inputEmptyClass) : setInputRegEmailClass('hidden');
        
      !regexPhoneNumbers.test(formData[2].inputPhoneValue) ? setInputRegTelClass(inputEmptyClass) : setInputRegTelClass('hidden');
        
      } else {
        setClicked(isClicked + 1); 
        setStepClicked('stepNumberActive');
        setInputRegEmailClass('hidden');
        setInputRegTelClass('hidden');
      }
  };

  const nextHandleClick = () => {
    if (
      totalResultForm[0].name.length === 0 ||
      totalResultForm[0].email.length === 0 ||
      totalResultForm[0].phoneNumber.length === 0
    ) {
      setInputError(inputErrorBorder);
      setInputErrorText(inputEmptyClass);
    } else {
      validateInput();
    }
  };

  const backHandleClick = () => {
    setClicked(isClicked - 1);
    setStepClicked('stepNumberActive');
  };

  const backHandleChangeClick = () => {
    setClicked(isClicked - 2);
  };

  const confirmPageHiddenClass = () => {
    setBackHandleClass('hidden');
    setTitleClass('hidden');
  };

  return (
    <div className="App">
      <Steps stepClicked={stepClicked} isClicked={isClicked} />
      <div className="flex-col">
        <div className={titleClass}>
          <Title
            title={titleAray[isClicked]}
            subTitle={subTitleAray[isClicked]}
          />
        </div>
        <Form
          isClicked={isClicked}
          backHandleChangeClick={backHandleChangeClick}
          confirmPageHiddenClass={confirmPageHiddenClass}
          backHandleClick={backHandleClick}
          inputError={inputError}
          inputErrorText={inputErrorText}
          inputRegEmailClass={inputRegEmailClass}
          inputRegTelClass={inputRegTelClass}
        />
      </div>
      <Button
        handleClick={backHandleClick}
        type={goBackBtn.type}
        classBtn={isClicked === 0 ? 'hidden' : backHandleClass}
        title={goBackBtn.name}
      />
      <Button
        handleClick={nextHandleClick}
        type={nextStepBtn.type}
        classBtn={isClicked === 3 ? 'hidden' : nextStepBtn.className}
        title={nextStepBtn.name}
      />
    </div>
  );
}

export default App;
