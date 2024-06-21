import { Button } from "reactstrap";
import { useContext, useState } from "react";
import OptionsContext from "@/context/OptionsContext";

import OptionValueEditModal from "../Modal/OptionValueEditModal";

const OptionTableBody = () => {
  const options = useContext(OptionsContext);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  const removeOption = (index: number) => {
    options.removeOption(index);
  };

  const editOption = (index: number) => {
    setEdit(true);
    setEditIndex(index);
  };

  return (
    <tbody className="main-task-wrapper">
      {options.options.map((data, index) =>
        index !== 0 ? (
          <tr key={index}>
            <td key={"option" + index + "first"}>Option {index}</td>
            {data.map((item, itemKey) => (
              <td key={"option " + index + "_" + itemKey}>{item}</td>
            ))}
          </tr>
        ) : null
      )}
      {options.options.length > 0 ? (
        <tr key="action-row">
          <td></td>
          {options.options[0].map((data, index) => (
            <td>
              <ul className="action">
                <li className="edit" onClick={() => editOption(index)}>
                  <a href="javascript:void(0)">
                    <i className="icon-pencil-alt" />
                  </a>
                </li>
                <li className="delete" onClick={() => removeOption(index)}>
                  <a href="javascript:void(0)">
                    <i className="icon-trash" />
                  </a>
                </li>
              </ul>
            </td>
          ))}
        </tr>
      ) : null}
      {edit && (
        <OptionValueEditModal editIndex={editIndex} toggleEdit={setEdit} />
      )}
    </tbody>
  );
};

export default OptionTableBody;
