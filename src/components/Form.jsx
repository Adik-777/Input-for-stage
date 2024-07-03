import { useState } from 'react';
import Input from './Input';
import formData from '../data/formData';
import formDataSubscription from '../data/formDataSubscription';
import formDataAddOns from '../data/formDataAddOns';
import totalResultForm from '../data/totalResultForm';
import Button from './Button';
import changeBtn from '../data/changeBtn';
import confirmBtn from '../data/confirmBtn';

function Form({
  inputClasses,
  isClicked,
  backHandleChangeClick,
  confirmPageHiddenClass,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [secondPageValue, setSecondPageValue] = useState(9);
  const [onlineService, setOnlineService] = useState(
    JSON.parse(localStorage.getItem('service')) || 0
  );
  const [largerStorage, setLargerStorage] = useState(
    JSON.parse(localStorage.getItem('storage')) || 0
  );
  const [customizableProfile, setCustomizableProfile] = useState(
    JSON.parse(localStorage.getItem('profile')) || 0
  );
  const [dataAddOns, setDataAddOns] = useState(
    JSON.parse(localStorage.getItem('checked')) || formDataAddOns
  );
  const [yearlyList, setyearlyList] = useState(
    JSON.parse(localStorage.getItem('checked yearlyList')) || true
  );
  const [confirm, setConfirm] = useState(false);
  const [confirmBtnClass, setConfirmBtnClass] = useState(confirmBtn.className);
  const finalResultValue = {};
  totalResultForm[0] = { name: name, email: email, phoneNumber: phone };
  totalResultForm[1] = { subscription: secondPageValue };
  totalResultForm[2] = {
    onlineService: onlineService,
    largerStorage: largerStorage,
    customizableProfile: customizableProfile,
  };

  console.log(dataAddOns);
  console.log(finalResultValue);

  function checkedClick() {
    setyearlyList(!yearlyList);
    setOnlineService(0);
    setLargerStorage(0);
    setCustomizableProfile(0);
    yearlyList ? setSecondPageValue(90) : setSecondPageValue(9)
    const checkedDataAddOns = dataAddOns.map((item) =>
      item.checked ? { ...item, checked: !item.checked } : item
    );
    setDataAddOns(checkedDataAddOns);
    localStorage.setItem('checked', JSON.stringify(checkedDataAddOns));
    localStorage.setItem('checked yearlyList', JSON.stringify(!yearlyList));
  }

  function monthlyPlanPage() {
    return formDataSubscription.map((item) => {
      return (
        <div key={item.valueMo}>
          <Input
            checked={item.valueMo === secondPageValue}
            labelSpan={item.labelSpanMo}
            spanClass={item.spanClass}
            labelName={item.labelName}
            labelClass={item.labelClassMo}
            nameInput={item.labelName}
            typeInput={item.typeInput}
            inputId={item.id}
            inputValue={item.valueMo}
            onChange={(e) => setSecondPageValue(+e.target.value)}
          />
        </div>
      );
    });
  }
  function yearlyPlanPage() {
    return formDataSubscription.map((item) => {
      return (
        <div key={item.valueYr}>
          <Input
            checked={item.valueYr === secondPageValue}
            labelSpan={item.labelSpanYr}
            yearlySpan={item.yearlySpan}
            spanClass={item.spanClass}
            spanYearlyClass={item.spanYearlyClass}
            labelName={item.labelName}
            labelClass={item.labelClassYr}
            nameInput={item.labelName}
            typeInput={item.typeInput}
            inputId={item.id}
            inputValue={item.valueYr}
            onChange={(e) => setSecondPageValue(+e.target.value)}
          />
        </div>
      );
    });
  }
  function handleChecked(id) {
    const checkedDataAddOns = dataAddOns.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setDataAddOns(checkedDataAddOns);
    localStorage.setItem('checked', JSON.stringify(checkedDataAddOns));
  }
  function monthlyOnsPage() {
    return dataAddOns.map((item) => {
      return (
        <div key={item.id}>
          <Input
            inputWrongClass={item.inputOnsClass}
            checked={item.checked}
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
            onChange={(event) => {
              if (item.id === 'service') {
                item.checked
                  ? setOnlineService(0)
                  : setOnlineService(+event.target.value);
                localStorage.setItem(
                  'service',
                  JSON.stringify(+event.target.value)
                );
              } else if (item.id === 'storage') {
                item.checked
                  ? setLargerStorage(0)
                  : setLargerStorage(+event.target.value);
                localStorage.setItem(
                  'storage',
                  JSON.stringify(+event.target.value)
                );
              } else if (item.id === 'profile') {
                item.checked
                  ? setCustomizableProfile(0)
                  : setCustomizableProfile(+event.target.value);
                localStorage.setItem(
                  'profile',
                  JSON.stringify(+event.target.value)
                );
              }
              handleChecked(item.id);
            }}
          />
        </div>
      );
    });
  }
  function yearlyOnsPage() {
    return dataAddOns.map((item) => {
      return (
        <div key={item.id}>
          <Input
            inputWrongClass={item.inputOnsClass}
            checked={item.checked}
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
            onChange={(event) => {
              if (item.id === 'service') {
                item.checked
                  ? setOnlineService(0)
                  : setOnlineService(+event.target.value);
                localStorage.setItem(
                  'service',
                  JSON.stringify(+event.target.value)
                );
              } else if (item.id === 'storage') {
                item.checked
                  ? setLargerStorage(0)
                  : setLargerStorage(+event.target.value);
                localStorage.setItem(
                  'storage',
                  JSON.stringify(+event.target.value)
                );
              } else if (item.id === 'profile') {
                item.checked
                  ? setCustomizableProfile(0)
                  : setCustomizableProfile(+event.target.value);
                localStorage.setItem(
                  'profile',
                  JSON.stringify(+event.target.value)
                );
              }
              handleChecked(item.id);
            }}
          />
        </div>
      );
    });
  }

  const changeSubscription = () => {
    backHandleChangeClick();
  };

  function pages(isClicked) {
    if (isClicked === 0) {
      return formData.map((e) => {
        return (
          <Input
            labelClass={e.labelClass}
            labelName={e.labelName}
            typeInput={e.typeInput}
            placeholderInput={e.placeholderInput}
            required
            key={e.placeholderInput}
            // inputValue={}
            onChange={(event) => {
              if (e.labelName === 'Name') {
                setName(event.target.value);
                localStorage.setItem(
                  'name',
                  JSON.stringify(event.target.value)
                );
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
    }  
    if (isClicked === 1) {
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
                checked={!yearlyList}
              />
            </label>
            <span className={!yearlyList ? 'switchModeActive' : 'switchMode'}>
              Yearly
            </span>
          </div>
        </div>
      );
    } 
    if (isClicked === 2) {
      return <>{yearlyList ? monthlyOnsPage() : yearlyOnsPage()}</>;
    }
    if (isClicked === 3) {
      switch (secondPageValue) {
        case 9:
          finalResultValue.subscription = 'Arcade (Monthly)';
          finalResultValue.period = '$9/mo';
          break;
        case 12:
          finalResultValue.subscription = 'Advanced (Monthly)';
          finalResultValue.period = '$12/mo';
          break;
        case 15:
          finalResultValue.subscription = 'Pro (Monthly)';
          finalResultValue.period = '$15/mo';
          break;
        case 90:
          finalResultValue.subscription = 'Arcade (Yearly)';
          finalResultValue.period = '$90/yr';
          break;
        case 120:
          finalResultValue.subscription = 'Advanced (Yearly)';
          finalResultValue.period = '$120/yr';
          break;
        case 150:
          finalResultValue.subscription = 'Pro (Yearly)';
          finalResultValue.period = '$150/yr';
          break;
        default:
          finalResultValue.subscription = 'error';
          break;
      }

      if (onlineService === 1) {
        finalResultValue.service = 'Online service';
        finalResultValue.additionalServicePeriod = '+$1/mo';
      }
      if (largerStorage === 2) {
        finalResultValue.storage = 'Larger storage';
        finalResultValue.additionalStoragePeriod = '+$2/mo';
      }
      if (customizableProfile === 2) {
        finalResultValue.profile = 'Customizable profile';
        finalResultValue.additionalProfilePeriod = '+$2/mo';
      }
      if (onlineService === 10) {
        finalResultValue.service = 'Online service';
        finalResultValue.additionalServicePeriod = '+$10/yr';
      }
      if (largerStorage === 20) {
        finalResultValue.storage = 'Larger storage';
        finalResultValue.additionalStoragePeriod = '+$20/yr';
      }
      if (customizableProfile === 20) {
        finalResultValue.profile = 'Customizable profile';
        finalResultValue.additionalProfilePeriod = '+$20/yr';
      }

      const calcolatePage = () => {
        return (
          <>
            <div className="flex flex-col bg-[rgb(248,249,255)] rounded-[8px] w-[450px] p-[24px] pt-[16px] mb-[26px]">
              <div className="flex justify-between items-center border-b-[1px] border-[#9699AA] mb-[16px]">
                <div className="flex flex-col items-start">
                  <span className="text-denim text-[16px] font-medium mb-[7px] leading-[22px]">
                    {finalResultValue.subscription}
                  </span>
                  <Button
                    handleClick={changeSubscription}
                    type={changeBtn.type}
                    classBtn={changeBtn.className}
                    title={changeBtn.name}
                  />
                </div>
                <span className="text-denim text-[16px] leading-[20px] font-medium">
                  {finalResultValue.period}
                </span>
              </div>

              {onlineService ? (
                <div className="flex justify-between mb-[16px]">
                  <span className="text-grey text-[14px] leading-[20px] font-medium">
                    {finalResultValue.service}
                  </span>
                  <span className="text-denim text-[14px] leading-[20px] font-medium">
                    {finalResultValue.additionalServicePeriod}
                  </span>
                </div>
              ) : (
                ''
              )}
              {largerStorage ? (
                <div className="flex justify-between mb-[16px]">
                  <span className="text-grey text-[14px] leading-[20px] font-medium">
                    {finalResultValue.storage}
                  </span>
                  <span className="text-denim text-[14px] leading-[20px] font-medium">
                    {finalResultValue.additionalStoragePeriod}
                  </span>
                </div>
              ) : (
                ''
              )}
              {customizableProfile ? (
                <div className="flex justify-between">
                  <span className="text-grey text-[14px] leading-[20px] font-medium">
                    {finalResultValue.profile}
                  </span>
                  <span className="text-denim text-[14px] leading-[20px] font-medium">
                    {finalResultValue.additionalProfilePeriod}
                  </span>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className="flex justify-between w-[402px] ml-[24px]">
              <span className="text-grey text-[14px] leading-[20px] font-medium">
                Total (per year)
              </span>
              <span className="text-purple text-[20px] leading-[20px] font-medium">
                $
                {secondPageValue +
                  onlineService +
                  largerStorage +
                  customizableProfile}
                /{yearlyList ? 'mo' : 'yr'}
              </span>
            </div>
          </>
        );
      };
      const confirmPage = () => {
        return (
          <div className="flex flex-col items-center pt-[165px]">
            <div className="bg-confirmImg bg-no-repeat w-[80px] h-[80px] mb-[33px]" />
            <h1 className="text-denim text-[32px] leading-[44px] font-medium text-center mb-[14px]">
              Thank you!
            </h1>
            <p className="text-grey text-[16px] leading-[25px] font-medium w-[450px] text-center">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        );
      };

      const confirmPageActive = () => {
        setConfirm(true);
        setConfirmBtnClass('hidden');
        confirmPageHiddenClass();
      };

      return (
        <>
          {confirm ? confirmPage() : calcolatePage()}
          <Button
            handleClick={confirmPageActive}
            type={confirmBtn.type}
            classBtn={isClicked === 3 ? confirmBtnClass : 'hidden'}
            title={confirmBtn.name}
          />
        </>
      );
    }
  }
  return (
    <form onSubmit={onSubmit} className={inputClasses} action="#">
      {pages(isClicked)}
    </form>
  );
}

export default Form;
