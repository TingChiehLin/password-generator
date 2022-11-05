type checkboxDataType = {
  id: string;
  isChecked: boolean;
  text: string;
};

export const checkboxData: checkboxDataType[] = [
  {
    id: "chkUppercase",
    isChecked: false,
    text: "Include Uppercase Letters",
  },
  {
    id: "chkLowercase",
    isChecked: false,
    text: "Include Lowercase Letters",
  },
  {
    id: "chkNumber",
    isChecked: false,
    text: "Include Numbers",
  },
  {
    id: "chkSymbol",
    isChecked: false,
    text: "Include Symbols",
  },
];
