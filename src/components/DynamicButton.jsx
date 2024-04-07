function DynamicButton({ btnType = "red", children }) {
  const BtnTypeMap = {
    "red": "btn-red",
    "transparent": "btn-transparent",
  };

  return (
    <button
      className={`btn-base ${BtnTypeMap[btnType]}`}
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </button>
  );
}

export default DynamicButton;
