import { Dispatch, SetStateAction, createContext } from "react";
import type { OptionsData } from "Types/DataType";

interface GlobalType {
  options: OptionsData;
  setAllOptions: Dispatch<SetStateAction<OptionsData>>;
  addNewOption: (data: Array<number>) => void;
  removeOption: (index: number) => void;
  updateOption: (index: number, data: Array<number>) => void;
}

const OptionsContext = createContext<GlobalType>({
  options: [],
  setAllOptions: () => {},
  addNewOption: () => {},
  removeOption: () => {},
  updateOption: () => {},
});

export default OptionsContext;
