import { memo, useCallback, useEffect, useMemo, useState } from "react";

const AppService = () => {
  const [count, setCount] = useState(false);
  const [temp, setTemp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setTemp(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleIncrement = () => {
    setCount((count) => !count);
  };

  return {
    count,
    isModalOpen,
    temp,
    showModal,
    setIsModalOpen,
    handleIncrement,
    handleOk,
    handleCancel,
  };
};

export default AppService;
