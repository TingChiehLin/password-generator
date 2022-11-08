import { ChangeEvent, FC } from "react";

import { CheckBox, CheckBoxProps } from "../CheckBox/index";

type checkBoxProp = {
  //Omit => remove onChange event
  data: Omit<CheckBoxProps, "onChange">[];
  onCheckboxChanged: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CheckBoxSection: FC<checkBoxProp> = ({
  data,
  onCheckboxChanged,
}) => {
  return (
    <div>
      {data.map((e, index) => (
        <CheckBox
          key={e.id}
          id={e.id}
          isChecked={e.isChecked}
          text={e.text}
          onChange={onCheckboxChanged}
        />
      ))}
    </div>
  );
};
