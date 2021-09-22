import { ChangeEvent } from "react";

type optionsType = {
  optionValue: string;
  optionTitle: string;
};

type PropsType = {
  optionDefValue: string;
  options: Array<optionsType>;
  sortSelectionCallback: (sortType: string) => void;
};

export const MySelect = (props: PropsType) => {
  const optionsMap = props.options.map((option) => {
    return (
      <option key={option.optionValue} value={option.optionValue}>
        {option.optionTitle}
      </option>
    );
  });

  const onChangehandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.sortSelectionCallback(event.currentTarget.value);
  };

  return (
    <select onChange={onChangehandler}>
      <option disabled value="" selected>
        {props.optionDefValue}
      </option>
      {optionsMap}
    </select>
  );
};
