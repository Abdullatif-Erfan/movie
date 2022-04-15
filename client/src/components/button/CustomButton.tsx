import React from "react";
type ButtonProps = {
  btnType?: "success" | "info" | "primary" | "danger" | "warning";
  children?: string | React.ReactNode;
  onClick?: () => void;
} & React.ComponentProps<"button">;

function CustomButton({ btnType, children, onClick, ...rest }: ButtonProps) {
  return (
    <button
      className={btnType}
      {...rest}
      onClick={onClick}
      data-test="re-usable-button"
    >
      {children}
    </button>
  );
}
export default CustomButton;
