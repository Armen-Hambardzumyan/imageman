import React from "react";
import closeIcon from "../assets/icons/removeIcon.svg";
import { ModalProps } from "../types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border max-w-3xl w-full shadow-lg rounded-3xl bg-white">
        <button className="absolute top-0 right-0 m-4" onClick={onClose}>
          <img src={closeIcon} alt="Remove" className="w-7 h-7" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
