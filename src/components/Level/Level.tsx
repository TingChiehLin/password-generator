type LevelProp = {
  strength: string;
};

export const Level = ({ strength }: LevelProp) => {
  //return strength === "TOO WEAK!" && <div className="bg-red-500 w-3 h-8"></div>;
  return <div className="border-white border-2 w-3 h-8"></div>;
};

//<div className="border-white border-2 w-3 h-8"></div>
// <div className="bg-red-500 w-3 h-8"></div>
