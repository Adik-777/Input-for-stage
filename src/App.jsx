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

function App() {
  const [isClicked, setClicked] = useState(0);
  const [stepClicked, setStepClicked] = useState('stepNumberActive');
  const [inputError, setInputError] = useState('border-[#EE374A]');
  const [inputErrorText, setInputErrorText] = useState(
    'text-[#EE374A] absolute end-0'
  );
  const [backHandleClass, setBackHandleClass] = useState(goBackBtn.className);
  const [titleClass, setTitleClass] = useState();

  const nextHandleClick = () => {
  

    if (totalResultForm[0].name.length === 0) {
      formData.map((el) => {
        if (el.typeInput === 'text') {
          el.inputNameWrongClass = inputError;
          el.inputEmptyClass = inputErrorText;
        } else {
          setInputError();
          setInputErrorText();
        }
      });
    }
    if (totalResultForm[0].email.length === 0) {
      formData.map((el) => {
        if (el.typeInput === 'email') {
          el.inputEmailWrongClass = inputError;
          el.inputEmptyClass = inputErrorText;
        } else {
          setInputError();
          setInputErrorText();
        }
      });
    }
    if (totalResultForm[0].phoneNumber.length === 0) {
      formData.map((el) => {
        if (el.typeInput === 'tel') {
          el.inputTelWrongClass = inputError;
          el.inputEmptyClass = inputErrorText;
        } else {
          setInputError();
          setInputErrorText();
        }
      });
    } else {
      setClicked(isClicked + 1);
      setStepClicked('stepNumberActive');
    }
  };

  const backHandleClick = () => {
    setClicked(isClicked - 1);
    setStepClicked('stepNumberActive');
    
     formData.map((el) => {
        // if (el.typeInput === 'text') {
        // el.inputValue = totalResultForm[0].name}
        if (el.typeInput === 'email') {
        el.inputValue = totalResultForm[0].email}
        if (el.typeInput === 'tel') {
        el.inputValue = totalResultForm[0].phoneNumber}
      })
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
