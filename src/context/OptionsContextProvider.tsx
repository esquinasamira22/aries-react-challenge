import React, { ReactNode, useState } from "react";
import OptionsContext from "./OptionsContext";
import type { OptionsData } from "Types/DataType";
import { optionsDummyData } from "Data/Charts/ApexChart";

interface CustomizerContextType {
  children: ReactNode;
}
const OptionsContextProvider = ({ children }: CustomizerContextType) => {
  const [allOptions, setAllOptions] = useState<OptionsData>(optionsDummyData);

  const addNewOption = (data: Array<number>) => {
    const optionTemp = {
      stock_price: data[0],
      option_a: data[1],
      option_b: data[2],
      option_c: data[3],
      option_d: data[4],
    };
    if (allOptions.length === 0) {
      let tempOptions = [];
      tempOptions[0] = [optionTemp.stock_price];
      tempOptions[1] = [optionTemp.option_a];
      tempOptions[2] = [optionTemp.option_b];
      tempOptions[3] = [optionTemp.option_c];
      tempOptions[4] = [optionTemp.option_d];
      setAllOptions(tempOptions);
    } else {
      let tempOptions = [];
      tempOptions[0] = [...allOptions[0], optionTemp.stock_price];
      tempOptions[1] = [...allOptions[1], optionTemp.option_a];
      tempOptions[2] = [...allOptions[2], optionTemp.option_b];
      tempOptions[3] = [...allOptions[3], optionTemp.option_c];
      tempOptions[4] = [...allOptions[4], optionTemp.option_d];
      setAllOptions(tempOptions);
    }
  };

  const updateOption = (id: number, newData: Array<number>) => {
    let tempOptions = [];
    tempOptions[0] = allOptions[0].map((data, index) => {
      if (index === id) {
        return newData[0];
      } else {
        return data;
      }
    });
    tempOptions[1] = allOptions[1].map((data, index) => {
      if (index === id) {
        return newData[1];
      } else {
        return data;
      }
    });
    tempOptions[2] = allOptions[2].map((data, index) => {
      if (index === id) {
        return newData[2];
      } else {
        return data;
      }
    });
    tempOptions[3] = allOptions[3].map((data, index) => {
      if (index === id) {
        return newData[3];
      } else {
        return data;
      }
    });
    tempOptions[4] = allOptions[4].map((data, index) => {
      if (index === id) {
        return newData[4];
      } else {
        return data;
      }
    });

    setAllOptions(tempOptions);
  };

  const removeOption = (id: number) => {
    let tempOptions = [];
    tempOptions[0] = allOptions[0].filter((data, index) => index !== id);
    tempOptions[1] = allOptions[1].filter((data, index) => index !== id);
    tempOptions[2] = allOptions[2].filter((data, index) => index !== id);
    tempOptions[3] = allOptions[3].filter((data, index) => index !== id);
    tempOptions[4] = allOptions[4].filter((data, index) => index !== id);

    setAllOptions(tempOptions);
  };

  return (
    <OptionsContext.Provider
      value={{
        options: allOptions,
        setAllOptions,
        addNewOption,
        removeOption,
        updateOption,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export { OptionsContextProvider };
