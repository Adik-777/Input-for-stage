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
import confirmBtn from './data/confirmBtn';
import totalResultForm from './data/totalResultForm';
import formData from './data/formData';

function App() {
  const [isClicked, setClicked] = useState(0);
  const [stepClicked, setStepClicked] = useState('stepNumberActive');
  const [inputError, setInputError] = useState('inputEmpty');
  console.log(totalResultForm);

  const nextHandleClick = () => {
    formData.forEach((el) => {
      if (el.typeInput === 'text') {
        totalResultForm[0].name.length === 0
          ? el.inputWrongClass = 'inputEmpty'
          : // ? (el.inputWrongClass = inputWrongClass)
            setInputError('');
        // setClicked(isClicked + 1);
        setStepClicked('stepNumberActive');
      }
      if (el.typeInput === 'email') {
        totalResultForm[0].email.length === 0
          ? el.inputWrongClass = 'inputEmpty'
          : // ? (el.inputWrongClass = inputWrongClass)
            setInputError('');
        // setClicked(isClicked + 1);
        setStepClicked('stepNumberActive');
      }
      if (el.typeInput === 'tel') {
        totalResultForm[0].phoneNumber.length === 0
          ? console.log(el.inputWrongClass)
          : // ? (el.inputWrongClass = inputWrongClass)
            setInputError('');
        // setClicked(isClicked + 1);
        setStepClicked('stepNumberActive');
      } else {
      }
    });
      // if (totalResultForm[0].name.length ||
      //   totalResultForm[0].email.length  ||
      //   totalResultForm[0].phoneNumber.length === 0) {
      //   formData.forEach((el) => {
      //    if (el.typeInput === 'text'){
      //        el.inputWrongClass = inputError}
      //    if (el.typeInput === 'email'){
      //        el.inputWrongClass = inputError}
      //    if (el.typeInput === 'tel'){
      //        el.inputWrongClass = inputError}
      //       else {setInputError('')}}
      //   );
      // }
      if (totalResultForm[0].email.length === 0) {
        formData.map((el) =>
          el.typeInput === 'email'
            ? (el.inputWrongClass = inputError)
            : setInputError('')
        );
      }
      if (totalResultForm[0].phoneNumber.length === 0) {
        formData.map((el) =>
          el.typeInput === 'tel'
            ? (el.inputWrongClass = inputError)
            : setInputError('')
        );
      } 
      else {
        setInputError('')
        setClicked(isClicked + 1);
        setStepClicked('stepNumberActive');
      }
  };

  
  const backHandleClick = () => {
    setClicked(isClicked - 1);
    setStepClicked('stepNumberActive');
  };
  return (
    <div className="App">
      <Steps stepClicked={stepClicked} isClicked={isClicked} />
      <div className="flex-col">
        <Title
          title={titleAray[isClicked]}
          subTitle={subTitleAray[isClicked]}
        />
        <Form isClicked={isClicked} />
      </div>
      <Button
        handleClick={backHandleClick}
        type={goBackBtn.type}
        classBtn={isClicked === 0 ? 'hidden' : goBackBtn.className}
        title={goBackBtn.name}
      />
      <Button
        handleClick={nextHandleClick}
        type={nextStepBtn.type}
        classBtn={isClicked === 3 ? 'hidden' : nextStepBtn.className}
        title={nextStepBtn.name}
      />
      <Button
        handleClick={nextHandleClick}
        type={confirmBtn.type}
        classBtn={isClicked === 3 ? confirmBtn.className : 'hidden'}
        title={confirmBtn.name}
      />
    </div>
  );
}

export default App;
