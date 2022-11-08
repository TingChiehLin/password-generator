type checkboxDataType = {
  id: string;
  isChecked: boolean;
  text: string;
  generate: () => string;
};

export const checkboxData: checkboxDataType[] = [
  {
    id: "chkUppercase",
    isChecked: false,
    text: "Include Uppercase Letters",
    generate: () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
  },
  {
    id: "chkLowercase",
    isChecked: false,
    text: "Include Lowercase Letters",
    generate: () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
  },
  {
    id: "chkNumber",
    isChecked: false,
    text: "Include Numbers",
    generate: () => {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },
  },
  {
    id: "chkSymbol",
    isChecked: false,
    text: "Include Symbols",
    generate: () => {
      const symbols = "!@#$%^&*(){}[]=<>/,.";
      return symbols[Math.floor(Math.random() * symbols.length)];
    },
  },
];
