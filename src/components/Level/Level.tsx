type LevelProp = {
  strength: number;
  isHighlight: boolean;
};

export const Level = ({ isHighlight, strength }: LevelProp) => {
  let color = "#18171F";
  switch (strength) {
    case 1:
      color = "#F64A4A";
      break;
    case 2:
      color = "#FB7C58";
      break;
    case 3:
      color = "#F8CD65";
      break;
    case 4:
      color = "#A4FFAF";
      break;
  }

  return (
    <div
      className="border-white border-2 w-3 h-8"
      style={{ backgroundColor: isHighlight ? color : "#18171F" }}
    ></div>
  );
};
