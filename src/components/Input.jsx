function Input(props) {
  const {
    inputEmpty,
    inputRegEmail,
    inputRegTel,
    inputEmptyClass,
    inputWrongClass,
    inputRegEmailClass,
    inputRegTelClass,
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
  } = props;

  return (
    <label className={labelClass}>
      {labelName}
      <span className={spanClass}>{labelSpan}</span>
      <span className={spanYearlyClass}>{yearlySpan}</span>
      <span className={inputEmptyClass}>{inputEmpty}</span>
      <span className={inputRegEmailClass}>{inputRegEmail}</span>
      <span className={inputRegTelClass}>{inputRegTel}</span>
      <input
        className={inputWrongClass}
        checked={checked}
        onChange={onChange}
        type={typeInput}
        name={typeInput}
        id={inputId}
        value={inputValue}
        placeholder={placeholderInput}
      />
    </label>
  );
}

export default Input;
