type statusDataType = {
  id: number;
  strength: string;
};

export const statusData: statusDataType[] = [
  { id: 0, strength: "TOO WEAK!" },
  { id: 1, strength: "WEAK" },
  { id: 2, strength: "MEDIUM" },
  { id: 3, strength: "STRONG" },
];

export const checkboxData = [
  {
    id: 0,
    isCkecked: false,
    text: "Include Uppercase Letters",
  },
  {
    id: 1,
    isCkecked: false,
    text: "Include Lowercase Letters",
  },
  {
    id: 2,
    isCkecked: false,
    text: "Include Numbers",
  },
  {
    id: 3,
    isCkecked: false,
    text: "Include Symbols",
  },
];
