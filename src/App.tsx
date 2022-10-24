import React, { useState, ChangeEvent } from "react";

import { checkboxData } from "./assets/data";

import { BsArrowRightShort } from "react-icons/bs";
import { CopyIcon } from "./components/icon";
import { CheckBoxSection } from "./components/CheckBoxSection";
import { Status } from "./components/Status";

const App = () => {
  const [inputValue, setinputValue] = useState<string>("13");
  const [password, setpassword] = useState(" Please Press Generate Button");
  const [strengthStatus, setstrength] = useState("TOO WEAK!");
  const [checkBoxStatus, setcheckBoxStatus] = useState([]);

  const handleChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setinputValue(event.target.value);
  };

  const copyTextHandler = () => navigator.clipboard.writeText(password);

  const onGenerateHandler = () => {
    console.log("generate password");
  };

  return (
    <>
      <div className="mt-32 w-2/4 mx-auto">
        <div className="mb-8 text-2xl text-center font-bold text-white-gray">
          Password Generator
        </div>
        <div className="bg-dark-gray py-4 px-8 mb-6 flex justify-between items-center">
          <div className="text-bright-gray text-[32px] font-medium">
            {password}
          </div>
          <CopyIcon
            className="cursor-pointer"
            onClickHandler={copyTextHandler}
          />
        </div>
        <div className="bg-dark-gray pt-6 pb-8 px-8">
          <div className="flex justify-between items-center">
            <label
              htmlFor="customSlider"
              className="text-[18px] text-bright-gray"
            >
              Character Length
            </label>
            <div className="text-[32px] text-bright-green">{inputValue}</div>
          </div>
          <div>
            <input
              onChange={handleChangeEvent}
              type="range"
              className="
                        mt-4
                        mb-8 
                        bg-gradient-to-r from-bright-green to-primary-dark                     
                        form-range
                        appearance-none
                        w-full
                        h-2
                        slider
                        bg-primary-dark
                        hover:cursor-pointer
                        hover:hover-slider
                      "
              value={inputValue}
              min="5"
              max="20"
              id="customSlider"
            />
          </div>
          <CheckBoxSection data={checkboxData} />:
          <div className="px-10 py-6 mb-8 bg-primary-dark flex justify-between items-center">
            <div className="text-white-gray text-[18px] uppercase font-bold">
              Strength
            </div>
            <Status strength={strengthStatus} />
          </div>
          <button
            type="button"
            onClick={onGenerateHandler}
            className="
                        w-full 
                        text-[18px] 
                        py-4
                      bg-bright-green
                        text-dark-gray font-bold 
                        leading-normal 
                        uppercase 
                        border-2
                        hover:bg-dark-gray 
                        hover:text-bright-green
                        hover:cursor-pointer
                        hover: border-bright-green
                        active:bg-dark-gray
                        active:text-bright-green
                        transition duration-150 
                        ease-in-out
                      "
          >
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <div>GENERATE</div>
                <BsArrowRightShort size={"2rem"} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
