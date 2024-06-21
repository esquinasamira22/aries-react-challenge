import FeatherIconCom from "CommonElements/FeatherIconCom";
import CommonModal from "CommonElements/CommonModal";
import Image from "next/image";
import React, { Fragment, useState, useRef, useContext } from "react";
import { Button, Input, Label } from "reactstrap";
import OptionsContext from "@/context/OptionsContext";

const OptionValueModal = () => {
  const [modal, setModal] = useState(false);
  const price = useRef<HTMLInputElement>(null);
  const option1 = useRef<HTMLInputElement>(null);
  const option2 = useRef<HTMLInputElement>(null);
  const option3 = useRef<HTMLInputElement>(null);
  const option4 = useRef<HTMLInputElement>(null);
  const options = useContext(OptionsContext);

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
      options.addNewOption([
        newPrice,
        newOption1,
        newOption2,
        newOption3,
        newOption4,
      ]);
    }
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    toggler: toggle,
    title: "Add Option",
  };
  return (
    <Fragment>
      <Button
        color="secondary"
        onClick={() => {
          toggle();
        }}
        type="button"
      >
        Add Option
      </Button>
      <CommonModal modalData={ModalData}>
        <div className="modal-toggle-wrapper">
          <h4 className="mb-2">Add a new option value</h4>
          <div className="mt-2">
            <Label className="form-lable">Stock Price</Label>
            <Input type={"number"} className="form-control" innerRef={price} />
          </div>
          <div className="mt-2">
            <Label className="form-lable">Option 1</Label>
            <Input
              type={"number"}
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
            />
          </div>
          <div className="mt-2">
            <Label className="form-lable">Option 3</Label>
            <Input
              type={"number"}
              className="form-control"
              innerRef={option3}
            />
          </div>
          <div className="mt-2">
            <Label className="form-lable">Option 4</Label>
            <Input
              type={"number"}
              className="form-control"
              innerRef={option4}
            />
          </div>
          <Button
            color="primary"
            className="d-flex align-items-center gap-2 text-light ms-auto mt-4"
            type="button"
            onClick={() => toggle()}
          >
            Save
            <FeatherIconCom iconName="ArrowRight" />
          </Button>
        </div>
      </CommonModal>
    </Fragment>
  );
};

export default OptionValueModal;
