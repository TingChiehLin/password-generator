import { FC } from "react";

import { CheckBox } from "../CheckBox/index";

type checkBoxDataProp = {
  id: number;
  text: string;
};

type checkBoxProp = {
  data: checkBoxDataProp[];
};

export const CheckBoxSection: FC<checkBoxProp> = ({ data }) => {
  return (
    <div>
      {data.map((e) => (
        <CheckBox key={e.id} text={e.text} />
      ))}
    </div>
  );
};
