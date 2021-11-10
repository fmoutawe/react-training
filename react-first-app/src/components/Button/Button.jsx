export const Button = ({onClickHandler, type, children}) => <button type={type || "button"} onClick={onClickHandler}>
  {children}
</button>