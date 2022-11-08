import React, { ChangeEvent } from "react";

export type CheckBoxProps = {
  id: string;
  text: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBox = ({ id, isChecked, text, onChange }: CheckBoxProps) => {
  return (
    <div className="flex items-center mb-5">
      <input
        id={id}
        className="
          appearance-none
          h-5 w-5 border
          border-gray-300 
          rounded-sm 
        bg-white
        checked:bg-blue-600
        checked:border-blue-600 
          focus:outline-none 
          transition 
          duration-200 
          mt-1 align-top bg-no-repeat bg-center bg-contain 
          mr-6 cursor-pointer
          shrink-0
          outline-none    
          "
        type="checkbox"
        name={id}
        value={String(isChecked)}
        onChange={onChange}
      />
      <label
        className=" 
                    form-check-label 
                    inline-block
                    text-bright-gray
                    font-bold
                    text-[18px]      
                  "
        htmlFor="flexCheckDefault"
      >
        {text}
      </label>
    </div>
  );
};
