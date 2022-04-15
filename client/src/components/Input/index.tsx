import { useState, useEffect } from 'react';

interface PropsInputComponent {
  labelText: string,
  inputName: string,
  inputType: string,
  value: string,
  setValue: CallableFunction
}

import './input.scss';

export default function Input ({labelText, inputName, inputType, value, setValue}:PropsInputComponent) {
  return (
      <label htmlFor={inputName} className='label'>
        {labelText}
        <input 
          name={inputName} 
          type={inputType} 
          className='input' 
          value={value} 
          onChange={(event)  => setValue(event.target.value)}
        />  
      </label>     
  );
};