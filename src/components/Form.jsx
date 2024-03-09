import { useState } from 'react';
import Input from './Input';
import formData from '../data/formData';
import formDataMonthly from '../data/formDataMonthly';
import formDataYearly from '../data/formDataYearly';
import totalResultForm from '../data/totalResultForm';
import formDataAddOns from '../data/formDataAddOns';

function Form({ inputClasses, isClicked }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [secondPageValue, setSecondPageValue] = useState(9);
  const [onlineService, setOnlineService] = useState(0);
  const [largerStorage, setLargerStorage] = useState(0);
  const [customizableProfile, setCustomizableProfile] = useState(0);
  const [yearlyList, setyearlyList] = useState(true);
  totalResultForm[0] = { name: name, email: email, phoneNumber: phone };
  totalResultForm[1] = { subscription: secondPageValue };
  totalResultForm[2] = { onlineService: onlineService, largerStorage: largerStorage, customizableProfile: customizableProfile };

  function checkedClick() {
    setyearlyList(!yearlyList);
  }
  function monthlyPlanPage() {
    return formDataMonthly.map((item) => {
      return (
        <div key={item.value}>
          <Input
            checked={item.value === secondPageValue}
            labelSpan={item.labelSpan}
            spanClass={item.spanClass}
            labelName={item.labelName}
            labelClass={item.labelClass}
            nameInput={item.labelName}
            typeInput={item.typeInput}
            inputId={item.id}
            inputValue={item.value}
            onChange={(e) => setSecondPageValue(+e.target.value)}
          />
        </div>
      );
    });
  }
  function yearlyPlanPage() {
    return formDataYearly.map((item) => {
      return (
        <div key={item.value}>
          <Input
            checked={item.value === secondPageValue}
            labelSpan={item.labelSpan}
            yearlySpan={item.yearlySpan}
            spanClass={item.spanClass}
            spanYearlyClass={item.spanYearlyClass}
            labelName={item.labelName}
            labelClass={item.labelClass}
            nameInput={item.labelName}
            typeInput={item.typeInput}
            inputId={item.id}
            inputValue={item.value}
            onChange={(e) => setSecondPageValue(+e.target.value)}
          />
        </div>
      );
    });
  }
  function monthlyOnsPage() {
    return formDataAddOns.map((item) => {
      return (
        <div key={item.id}>
          <Input
            inputWrongClass={item.inputOnsClass}
            // checked={item.value === thirdPageValue}
            labelSpan={item.labelSpanMo}
            spanClass={item.spanClass}
            labelName={item.labelName}
            yearlySpan={item.labelInfo}
            spanYearlyClass={item.infoClass}
            labelClass={item.labelClass}
            nameInput={item.labelName}
            typeInput={item.typeInput}
            inputId={item.id}
            inputValue={item.valueMo}
            onChange={(event) =>{ 
              if(item.id === "service"){
                setOnlineService(+event.target.value)
              } else if (item.id === "storage"){
                setLargerStorage(+event.target.value) 
              } else if (item.id === "profile"){
                setCustomizableProfile(+event.target.value)
              }
            }}
          />
        </div>
      );
    });
  }
  function yearlyOnsPage() {
    return formDataAddOns.map((item) => {
      return (
        <div key={item.id}>
          <Input
            inputWrongClass={item.inputOnsClass}
            // checked={item.value === thirdPageValue}
            labelSpan={item.labelSpanYr}
            spanClass={item.spanClass}
            labelName={item.labelName}
            yearlySpan={item.labelInfo}
            spanYearlyClass={item.infoClass}
            labelClass={item.labelClass}
            nameInput={item.labelName}
            typeInput={item.typeInput}
            inputId={item.id}
            inputValue={item.valueYr}
            onChange={(event) =>{ 
              if(item.id === "service"){
                setOnlineService(+event.target.value)
              } else if (item.id === "storage"){
                setLargerStorage(+event.target.value) 
              } else if (item.id === "profile"){
                setCustomizableProfile(+event.target.value)
              }
            }}
          />
        </div>
      );
    });
  }

  function pages(isClicked) {
    if (isClicked === 0) {
      return formData.map((e) => {
        return (
          <Input
            labelClass={e.labelClass}
            labelName={e.labelName}
            typeInput={e.typeInput}
            value={''}
            placeholderInput={e.placeholderInput}
            required
            key={e.placeholderInput}
            onChange={(event) => {
              if (e.labelName === 'Name') {
                setName(event.target.value);
              } else if (e.labelName === 'Address') {
                setEmail(event.target.value);
              } else if (e.labelName === 'Phone Number') {
                setPhone(event.target.value);
              }
            }}
            inputWrongClass={e.inputWrongClass}
          />
        );
      });
    } else if (isClicked === 1) {
      return (
        <div className="flex-col">
          <div className="flex gap-[18px] mb-[32px]">
            {yearlyList ? monthlyPlanPage() : yearlyPlanPage()}
          </div>
          <div className="flex gap-[24px] justify-center items-center w-[450px] h-[48px] rounded-[8px] bg-[#F8F9FF]">
            <span className={yearlyList ? 'switchModeActive' : 'switchMode'}>
              Monthly
            </span>
            <label className="switch">
              <input
                className="opacity-[0] absolute"
                type="checkbox"
                onChange={checkedClick}
                checked={!yearlyList ? true : false}
              />
            </label>
            <span className={!yearlyList ? 'switchModeActive' : 'switchMode'}>
              Yearly
            </span>
          </div>
        </div>
      );
    } else if (isClicked === 2) {
      return <div>{yearlyList ? monthlyOnsPage() : yearlyOnsPage()}</div>;
    }
  }
  return (
    <form onSubmit={onSubmit} className={inputClasses} action="#">
      {pages(isClicked)}
    </form>
  );
}

export default Form;
