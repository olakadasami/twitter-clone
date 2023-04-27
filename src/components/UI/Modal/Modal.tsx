import ReactDOM from "react-dom";
import { useModalStore } from "../../../store/modalStore";
import { FaTimes } from "react-icons/fa";
import NewTweetBar from "../../Tweet/NewTweetBar";
import image from "../../../assets/react.svg";

function Modal() {
  const setOpen = useModalStore((state) => state.setOpen);
  const closeModal = () => setOpen(false);

  return ReactDOM.createPortal(
    <>
      {/* BAckdrop */}
      <div onClick={closeModal} className="bg-black opacity-80 fixed inset-0" />
      {/* Modal */}
      <section className=" fixed top-10 shadow-2xl w-full z-100">
        <div className="bg-white rounded-3xl p-4 w-1/2 mx-auto">
          <div className="flex items-end">
            <FaTimes
              className="cursor-pointer"
              size={24}
              onClick={closeModal}
            />
          </div>
          <div className="pt-8">
            <NewTweetBar userImage={image} />
          </div>
        </div>
      </section>
    </>,
    document.getElementById("modal")!
  );
}

export default Modal;
