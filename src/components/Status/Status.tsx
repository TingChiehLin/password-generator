import React, { FC } from "react";

import { Level } from "../Level";

import { statusData } from "../../assets/data";

type StatusProps = {
  strength: string;
};

export const Status: FC<StatusProps> = ({ strength }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="font-bold text-2xl text-white mr-2">{strength}</div>;
      {statusData.map((e) => (
        <Level key={e.id} strength={strength} />
      ))}
    </div>
  );
};
