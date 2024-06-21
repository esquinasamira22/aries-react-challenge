import FeatherIconCom from "CommonElements/FeatherIconCom";
import CommonModal from "CommonElements/CommonModal";
import Image from "next/image";
import React, {
  Fragment,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";
import { Button, Input, Label } from "reactstrap";
import OptionsContext from "@/context/OptionsContext";

interface Props {
  editIndex: number;
  toggleEdit: (edit: boolean) => void;
}

const OptionValueEditModal = ({ editIndex, toggleEdit }: Props) => {
  const [modal, setModal] = useState(true);
  const price = useRef<HTMLInputElement>(null);
  const option1 = useRef<HTMLInputElement>(null);
  const option2 = useRef<HTMLInputElement>(null);
  const option3 = useRef<HTMLInputElement>(null);
  const option4 = useRef<HTMLInputElement>(null);
  const options = useContext(OptionsContext);

  const currentPrice = options.options[0].filter(
    (data, index) => index === editIndex
  );
  const currentOption1 = options.options[1].filter(
    (data, index) => index === editIndex
  );
  const currentOption2 = options.options[2].filter(
    (data, index) => index === editIndex
  );
  const currentOption3 = options.options[3].filter(
    (data, index) => index === editIndex
  );
  const currentOption4 = options.options[4].filter(
    (data, index) => index === editIndex
  );

  const toggle = () => {
    if (modal === true) {
      let newPrice = price.current?.value ? parseInt(price.current?.value) : 0;
      let newOption1 = option1.current?.value
        ? parseInt(option1.current?.value)
        : 0;
      let newOption2 = option2.current?.value
        ? parseInt(option2.current?.value)
        : 0;
      let newOption3 = option3.current?.value
        ? parseInt(option3.current?.value)
        : 0;
      let newOption4 = option4.current?.value
        ? parseInt(option4.current?.value)
        : 0;
      options.updateOption(editIndex, [
        newPrice,
        newOption1,
        newOption2,
        newOption3,
        newOption4,
      ]);
    }

    setModal(!modal);
    toggleEdit(false);
  };
  const ModalData = {
    isOpen: modal,
    toggler: toggle,
    title: "Add Option",
  };

  return (
    <Fragment>
      <CommonModal modalData={ModalData}>
        <div className="modal-toggle-wrapper">
          <h4 className="mb-2">Update the option value</h4>
          <div className="mt-2">
            <Label className="form-lable">Stock Price</Label>
            <Input
              type={"number"}
              defaultValue={currentPrice[0]}
              className="form-control"
              innerRef={price}
            />
          </div>
          <div className="mt-2">
            <Label className="form-lable">Option 1</Label>
            <Input
              type={"number"}
              defaultValue={currentOption1[0]}
              className="form-control"
              innerRef={option1}
            />
          </div>
          <div className="mt-2">
            <Label className="form-lable">Option 2</Label>
            <Input
              type={"number"}
              className="form-control"
              innerRef={option2}
              defaultValue={currentOption2[0]}
            />
          </div>
          <div className="mt-2">
            <Label className="form-lable">Option 3</Label>
            <Input
              type={"number"}
              className="form-control"
              innerRef={option3}
              defaultValue={currentOption3[0]}
            />
          </div>
          <div className="mt-2">
            <Label className="form-lable">Option 4</Label>
            <Input
              type={"number"}
              className="form-control"
              innerRef={option4}
              defaultValue={currentOption4[0]}
            />
          </div>
          <Button
            color="primary"
            className="d-flex align-items-center gap-2 text-light ms-auto mt-4"
            type="button"
            onClick={() => toggle()}
          >
            Update
            <FeatherIconCom iconName="ArrowRight" />
          </Button>
        </div>
      </CommonModal>
    </Fragment>
  );
};

export default OptionValueEditModal;
