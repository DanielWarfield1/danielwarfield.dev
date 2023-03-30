import Navbar from "./Navbar.js";
import Filler from "./Filler.js";
import ProfileHeader from "./ProfileHeader.js";
import ProfilePolymath from "./ProfilePolymath.js";
import ProfileRenaissance from "./ProfileRenaissance.js";
import ProfileEngineer from "./ProfileEngineer.js";
import ProfileDev from "./ProfileDev.js";
import ProfileEntrepreneur from "./ProfileEntrepreneur.js";
import ProfileArtist from "./ProfileArtist.js";

export default function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0 }}>
      <ProfileHeader />
      <ProfilePolymath />
      <ProfileRenaissance />
      <ProfileEngineer />
      <ProfileDev />
      <ProfileEntrepreneur />
      <ProfileArtist />
    </div>
  );
}
