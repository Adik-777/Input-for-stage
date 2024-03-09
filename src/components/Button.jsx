function Button(props) {
  const { handleClick, type, classBtn, title } = props;
  return (
    <button
      onClick={handleClick}
      type={type}
      className={classBtn}
    >
      {title}
    </button>
  );
}

export default Button;
