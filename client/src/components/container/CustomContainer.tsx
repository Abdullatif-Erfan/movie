import React, { CSSProperties } from "react";
import "./containerStyle.css";
type chilPropsType = {
  children?: React.ReactNode;
  styleAsProps?: CSSProperties;
  className?: string;
};
function CustomContainer({ className, children, styleAsProps }: chilPropsType) {
  return (
    <div className={`container ${className}`} style={styleAsProps}>
      {children}
    </div>
  );
}

export default CustomContainer;
