import React from 'react';

type PropsButton =  {
  text: string;
  variant: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

import './button.scss'

export default function Button({text, variant, onClick}: PropsButton ) {
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