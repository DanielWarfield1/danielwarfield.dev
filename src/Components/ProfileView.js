import ProfileHeader from "./ProfileHeader.js";
import ProfilePolymath from "./ProfilePolymath.js";
import ProfileRenaissance from "./ProfileRenaissance.js";
import ProfileEngineer from "./ProfileEngineer.js";
import ProfileDev from "./ProfileDev.js";
import ProfileEntrepreneur from "./ProfileEntrepreneur.js";
import ProfileArtist from "./ProfileArtist.js";

export default function App() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    console.log("scrolling to...");
    console.log(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <ProfileHeader />
      <ProfilePolymath />
      <ProfileRenaissance clickHandler={handleScrollTo} />
      <div style={{ height: "100px", background: "black" }}></div>
      <div id="engineerSection">
        <ProfileEngineer />
      </div>
      <div id="devSection">
        <ProfileDev />
      </div>
      <div id="EnrtepreneurSection">
        <ProfileEntrepreneur />
      </div>
      <div id="ArtistSection">
        <ProfileArtist />
      </div>
    </div>
  );
}
