import React, { ChangeEvent } from "react";

type CheckBoxProps = {
  text: string;
};

export const CheckBox = ({ text }: CheckBoxProps) => {
  const checkBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isCheck = e.target.checked;
  };

  return (
    <div className="flex items-center mb-5">
      <input
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
        value="true"
        onChange={checkBoxHandler}
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
