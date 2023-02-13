import About from "./components/About";
import Contact from "./components/Contact";
import Divider from "./components/Divider";

import HeroPage from "./components/HeroPage";

import RespoNavbar from "./components/RespoNavbar";
import Work from "./components/Work";
import Cursor from "./utils/Cursor";

function App() {
  return (
    <div className="overflow-x-hidden relative">
      <Cursor />
      <RespoNavbar />
      <HeroPage />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
