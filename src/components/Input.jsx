function Input(props) {
  const {
    inputWrongClass,
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
    // checked,
    onChange,
    // required
  } = props;
  
  return (
  <label className={labelClass}>
      {labelName}
      <span className={spanClass}>{labelSpan}</span>
      <span className={spanYearlyClass}>{yearlySpan}</span>
      <input className={inputWrongClass}
        // checked={checked}
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
