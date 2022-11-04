type checkboxDataType = {
  id: string;
  isChecked: boolean;
  text: string;
  strength: string;
};

export const checkboxData: checkboxDataType[] = [
  {
    id: "chkUppercase",
    isChecked: false,
    text: "Include Uppercase Letters",
    strength: "Normal",
  },
  {
    id: "chkLowercase",
    isChecked: false,
    text: "Include Lowercase Letters",
    strength: "Normal",
  },
  {
    id: "chkNumber",
    isChecked: false,
    text: "Include Numbers",
    strength: "Normal",
  },
  {
    id: "chkSymbol",
    isChecked: false,
    text: "Include Symbols",
    strength: "Normal",
  },
];
