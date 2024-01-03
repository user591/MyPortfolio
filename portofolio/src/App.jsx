import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { Portofolio } from "./components/Portofolio/Portofolio";
import { Achievement } from "./components/Achievement/Achievement";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <Portofolio></Portofolio>
      <Achievement></Achievement>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
