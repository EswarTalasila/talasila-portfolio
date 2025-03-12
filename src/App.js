// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header/Header.jsx";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects.jsx";
// import "./App.css"; // For your global styles
// import "./output.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />}></Route>
//           <Route path="/Projects" element={<Projects />}></Route>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

import "./App.css";
import "./output.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
