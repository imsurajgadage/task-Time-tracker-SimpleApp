import React from "react";
interface buttonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
const Button = ({ label, disabled, onClick }: buttonProps) => {
  return (
    <button
      className="text-text-400 px-4 py-2 rounded-md cursor-pointer border-2 border-bgColor-400 tracking-wide disabled:border-danger-main disabled:text-danger-main"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
