import React from "react";
type InputProps = React.ComponentProps<"input">;

function CustomInput(props: InputProps) {
  return <input {...props} />;
}

export default CustomInput;
