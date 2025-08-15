import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Contact from "./containers/contact";
import Skils from "./containers/skills";
import Portifolio from "./containers/portifolio";
import NavBar from "./components/navBar";
import particles from "./utills.js/particles.js";

function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderParticleJsHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/*Particles Js*/}

      {
        renderParticleJsHomePage && (
          <Particles id="particles" options={particles} init={handleInit}/>
        )}

      {/*Navbar*/}
      <NavBar/>

      {/*Main page content*/}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Skils" element={<Skils />} />
          <Route path="/Portifolio" element={<Portifolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
