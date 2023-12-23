import AppService from "./app.service";
import { Button } from "antd";
import ModalComp from "./Comp/Modal";

const AppView = () => {
  const {
    count,
    isModalOpen,
    temp,
    handleIncrement,
    setIsModalOpen,
    showModal,
    handleCancel,
    handleOk,
  } = AppService();

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {temp && ( // Just to avoid 'handleClick' useMemo from executing on mounting itself
        <ModalComp
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default AppView;
