function Input(props) {
  const {
    inputEmpty,
    inputEmptyClass,
    inputNameWrongClass,
    inputEmailWrongClass,
    inputTelWrongClass,
    labelName,
    labelClass,
    labelSpan,
    yearlySpan,
    spanClass,
    spanYearlyClass,
    typeInput,
    inputId,
    inputValue,
    placeholderInput,
    checked,
    onChange,
    // required
    // ref
  } = props;
  
  return (
  <label className={labelClass}>
      {labelName}
      <span className={spanClass}>{labelSpan}</span>
      <span className={spanYearlyClass}>{yearlySpan}</span>
      <span className={inputEmptyClass}>{inputEmpty}</span>
      <input className={inputNameWrongClass || inputEmailWrongClass || inputTelWrongClass}
        checked={checked}
        onChange={onChange}
        type={typeInput}
        name={typeInput}
        id={inputId}
        value={inputValue}
        placeholder={placeholderInput}
        // required={required}
      />
    </label>
  );
}

export default Input;
