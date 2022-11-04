type LevelProp = {
  strength: string;
  isHighlight: boolean;
};

export const Level = ({ strength, isHighlight }: LevelProp) => {
  let color = "#18171F";
  switch (strength) {
    case "TOO WEAK!":
      color = "#F64A4A";
      break;
    case "WEAK":
      color = "#FB7C58";
      break;
    case "MEDIUM":
      color = "#F8CD65";
      break;
    case "STRONG":
      color = "#A4FFAF";
      break;
    default:
      color = "#18171F";
  }

  return (
    <div
      className="border-white border-2 w-3 h-8"
      style={{ backgroundColor: isHighlight ? color : "#18171F" }}
    ></div>
  );
};
