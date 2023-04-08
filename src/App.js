import { useState } from "react";

import "./styles.css";
import ProfileView from "./Components/ProfileView.js";
import HireView from "./Components/HireView.js";
import ResumeView from "./Components/ResumeView.js";
import Navbar from "./Components/Navbar.js";

export default function App() {
  const [currentView, setCurrentView] = useState("profileView");

  function onChangeView(view) {
    window.scrollTo(0, 0);
    setCurrentView(view);
    console.log("Changed View To Home");
  }

  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <Navbar onChangeView={onChangeView} />
      {currentView === "profileView" && <ProfileView />}
      {currentView === "hireView" && <HireView />}
      {currentView === "resumeView" && <ResumeView />}
    </div>
  );
}
