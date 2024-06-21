import { useContext } from "react";
import * as React from "react";
import OptionsContext from "@/context/OptionsContext";

const OptionTableHead = () => {
  const options = useContext(OptionsContext);

  return (
    <thead>
      <tr>
        {options.options.length > 0 ? (
          <th scope="col">Option \ Stock Price</th>
        ) : null}
        {options.options[0].map((item) => (
          <th scope="col">{item}</th>
        ))}
      </tr>
    </thead>
  );
};

export default OptionTableHead;
