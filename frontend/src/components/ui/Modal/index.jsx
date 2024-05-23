import React, { createContext, useContext } from "react";
import Button from "../../ui/Button/index";
import { IconCircleXFilled } from "@tabler/icons-react";
import clsx from "clsx";

const ModalContext = createContext();

function Modal({
  children,
  isOpen,
  onClose,
  width,
  closeOverlay = false,
  variant = "dialog",
}) {
  if (!isOpen) return null;

  closeOverlay = closeOverlay ? onClose : null;

  const variants = {
    "full-screen": "w-[90vw] h-[90vh]",
    dialog: "",
  };

  return (
    <>
      {isOpen && (
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 z-9999999 w-full h-full flex items-center justify-center bg-gray-950 backdrop-blur-[2px] bg-opacity-60  "
          onClick={closeOverlay}
        >
          <div
            className={clsx(
              `bg-white z-999999 max-w-[90vw] max-h-[90vh] overflow-auto  flex flex-col rounded-2xl w-[30vw]  `,
              variants[variant]
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalContext.Provider value={onClose}>
              {children}
            </ModalContext.Provider>
          </div>
        </div>
      )}
    </>
  );
}

Modal.Header = function Header({ className, children }) {
  return (
    <div className="text-lg flex gap-2 z-9999999 md:p-4 rounded-t-2xl p-2 ">
      {children}
    </div>
  );
};

Modal.Body = function Body({ children }) {
  return (
    <div className="md:p-4 p-2 relative z-9999999 grow overflow-auto ">
      {children}
    </div>
  );
};

Modal.Footer = function Footer({ children }) {
  const onClose = useContext(ModalContext);
  return (
    <>
      <hr />
      <div className="p-2 flex   justify-end items-center">
        <Button onClick={onClose} variant="danger">
          <span className="flex items-center">
            <IconCircleXFilled />
            CLOSE
          </span>
        </Button>

        {children}
      </div>
    </>
  );
};

export default Modal;
