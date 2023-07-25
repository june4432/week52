import {useState} from "react";

export const useInput = (initialValue, disabled, validator) => {
    const disabledFlag = disabled || false;
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {target:{value}} = event;
      let willUpdate = true;
      if(typeof validator === "function"){
        willUpdate = validator(value); 
      }
      if(willUpdate){
        setValue(value);
      }
    }

    return { value:value, onChange:onChange, setValue:setValue, disabled:disabledFlag}; 
  }