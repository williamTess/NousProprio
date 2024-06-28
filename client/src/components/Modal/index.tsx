import CloseIcon from "@mui/icons-material/Close";
import { ButtonMUI } from "../MUI/ButtonMUI";

interface ModalProps {
  text: string;
  onClose: () => void;
  onValidate: () => void;
  textValidate?: string;
  textCancel?: string;
  isNotClosable?: boolean;
}

export const Modal = ({
  text,
  onClose,
  onValidate,
  textCancel = "Non",
  textValidate = "Oui",
  isNotClosable = false,
}: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-20">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-3xl 
        border-2 border-black"
      >
        {!isNotClosable && (
          <span className="flex justify-end hover:cursor-pointer">
            <CloseIcon onClick={() => onClose()} />
          </span>
        )}
        <div className="px-6 py-6">
          <div className="pb-5">{text}</div>
          <div className="flex gap-5">
            <ButtonMUI value={textValidate} onClick={() => onValidate()} />
            <ButtonMUI value={textCancel} onClick={() => onClose()} />
          </div>
        </div>
      </div>
    </div>
  );
};
