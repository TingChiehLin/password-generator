import React, { FC } from "react";

import { Level } from "../Level";

import { checkboxData } from "../../assets/data";

type StatusProps = {
  strength: number;
};

export const Status: FC<StatusProps> = ({ strength }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="font-bold text-2xl text-white mr-2">{strength}</div>;
      {checkboxData.map((e, index) => (
        <Level
          key={e.id}
          strength={e.strength}
          isHighlight={index <= strength - 1}
        />
      ))}
    </div>
  );
};
