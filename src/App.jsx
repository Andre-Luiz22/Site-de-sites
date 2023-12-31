import { Banner } from "./components/Banner";

function App() {

  return (
    <main className="bg-black font-custom px-3 pb-1 relative">
      <header className="  flex w-full h-12 justify-between items-center mb-5">
        <h2 className="text-pinkLogo bg-gradLogo font-bold px-5 py-1 rounded-md">SDS</h2>
        <ul className="flex relative text-white  gap-10 w-1/5 justify-end pr-7 after:block after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-full after:bg-gradLogo after:h-1">
          <li>Lista</li>
          <li>Lista</li>
          <li>Lista</li>
        </ul>
      </header>
      <Banner/>
    </main>
  );
}

export default App;
