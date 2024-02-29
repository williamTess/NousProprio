import CloseIcon from "@mui/icons-material/Close";
import { ButtonMUI } from "../MUI/ButtonMUI";

interface ModalProps {
  text: string;
  onClose: () => void;
  onValidate: () => void;
}

export const Modal = ({ text, onClose, onValidate }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-gray-light rounded-3xl">
        <span className="flex justify-end hover:cursor-pointer text-white">
          <CloseIcon onClick={() => onClose()} />
        </span>
        <div className="px-6 py-6">
          <div className="text-white pb-5">{text}</div>
          <div className="flex gap-5">
            <ButtonMUI value={"Oui"} onClick={() => onValidate()} />
            <ButtonMUI value={"Non"} onClick={() => onClose()} />
          </div>
        </div>
      </div>
    </div>
  );
};
