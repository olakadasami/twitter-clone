import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex">
      <section className="w-1/4 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-color-grey-light scrollbar-track-white">
        <Navbar />
      </section>
      <section className="w-2/4 shadow-md">Middle</section>
      <section className="w-1/4">Right</section>
    </div>
  );
}

export default App;
