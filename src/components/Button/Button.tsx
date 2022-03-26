import React from 'react';

interface ButtonProps {
  text: string;
  variant: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

import './button.scss'

export default function Button({text, variant, onClick}: ButtonProps ) {
  return (
    <button 
      onClick={onClick} 
      className={
        variant === "primary"   
        ? "primary" 
        : "secondary"}
    > {text}
    </button>
  );
};