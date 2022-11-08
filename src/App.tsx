import React, { useState, ChangeEvent } from "react";

import { checkboxData } from "./assets/data";

import { BsArrowRightShort } from "react-icons/bs";
import { CopyIcon } from "./components/icon";
import { CheckBoxSection } from "./components/CheckBoxSection";
import { Status } from "./components/Status";

const App = () => {
  const onCheckboxChanged = (e: ChangeEvent<HTMLInputElement>) => {
    // switch (e.target.name) {
    //   case "chkUppercase":
    //     setUpper(!hasUpper);
    //     break;
    //   case "chkLowercase":
    //     sethasLower(!hasLower);
    //     break;
    //   case "chkNumber":
    //     sethasNumber(!hasNumber);
    //     break;
    //   case "chkSymbol":
    //     sethasSymbol(!hasSymbol);
    //     break;
    //   default:
    //     setpassword("Please Press Generate Button");
    // }
    setCheckboxStatus((state) => {
      return state.map((c) => ({
        ...c,
        isChecked: e.target.id === c.id ? e.target.checked : c.isChecked,
      }));
    });
  };
  const [inputValue, setinputValue] = useState<number>(10);
  const [password, setpassword] = useState("Please Press Generate Button");
  const [checkboxStatus, setCheckboxStatus] = useState(checkboxData);
  const [hasUpper, setUpper] = useState<boolean>(false);
  const [hasLower, sethasLower] = useState<boolean>(false);
  const [hasNumber, sethasNumber] = useState<boolean>(false);
  const [hasSymbol, sethasSymbol] = useState<boolean>(false);
  const strength: number = checkboxStatus.filter((c) => c.isChecked).length;

  const handleChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setinputValue(Number(event.target.value));
  };

  const copyTextHandler = () => navigator.clipboard.writeText(password);



  interface RandomFuncType extends typesArrKeyType {
    upper: () => string;
    lower: () => string;
    number: () => string;
    symbol: () => string;
  }

  interface typesArrKeyType {
    [key: string]: () => string;
  }

  const randomFunc: RandomFuncType = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  //[index: string]: string
  //type typesArrKeyType = keyof typeof randomFunc;
  //type typesArrIndexType = typeof randomFunc[typesArrKeyType];

  const onGenerateHandler = () => {
    const isAllFalse = checkboxStatus.every((c) => c.isChecked === false);
    if (isAllFalse) {
      setpassword("Please click one of options");
    } else {
      const typesArr = [
        { hasUpper },
        { hasLower },
        { hasNumber },
        { hasSymbol },
      ].filter((c) => Object.values(c)[0]);
      console.log(typesArr);
      //to get value from array of object
      let çount = 0;
      for (const c of typesArr) {
        if (Object.values(c)[0] === true) çount++;
      }
      console.log(çount);
      for (let i = 0; i < inputValue; i += çount) {
        typesArr.forEach((type) => {
          const funcName = Object.keys(type)[0] as keyof RandomFuncType;
          setpassword((pevString) => (pevString += randomFunc[funcName]()));
        });
      }
      //1.Fliter out unchecked types
      //2.Loop Over Length call generator function for each type
      //3.Add generate pw to useState pw
      //setpassword(String(randomPassword));
    }
  };
  /*
      const randomNumber = Math.random() * (inputValue - 8) + 8;
      const randomPassword = randomNumber.toString(36).slice(-8);
  */
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
              min="8"
              max="14"
              id="customSlider"
            />
          </div>
          <CheckBoxSection
            data={checkboxStatus}
            onCheckboxChanged={onCheckboxChanged}
          />
          :
          <div className="px-10 py-6 mb-8 bg-primary-dark flex justify-between items-center">
            <div className="text-white-gray text-[18px] uppercase font-bold">
              Strength
            </div>
            <Status strength={strength} />
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
