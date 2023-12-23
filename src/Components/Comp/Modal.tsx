import React, { memo, useCallback, useEffect, useMemo } from "react";
import { Button, Modal } from "antd";

interface Props {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const ModalComp = ({ isModalOpen, handleOk, handleCancel }: Props) => {
  let temp;

  const handleClick = useMemo(() => {
    for (var i = 0; i < 1000; i++) {}
    console.log("Handle Click");
    temp = 2;
    return temp;
  }, []);

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ModalComp;
