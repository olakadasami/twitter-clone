import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useModalStore } from "./store/modalStore";
import Modal from "./components/UI/Modal/Modal";

function App() {
  const isOpen = useModalStore((state) => state.open);
  return (
    <div className="flex">
      <section className="w-1/4 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-color-grey-light scrollbar-track-white">
        <Navbar />
      </section>
      <section className="w-2/4 shadow-md h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-color-grey-light scrollbar-track-white">
        <Outlet />
      </section>
      <section className="w-1/4 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-color-grey-light scrollbar-track-white">
        Right
      </section>

      {isOpen && <Modal />}
    </div>
  );
}

export default App;
