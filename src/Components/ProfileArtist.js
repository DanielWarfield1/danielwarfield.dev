import artistTitle from "./resources/artist/artist.png";
import bg from "./resources/artist/wovenBG_small.jpg";
import bus from "./resources/artist/bus.png";
import tools from "./resources/artist/tools.png";
import bunny from "./resources/artist/artistBunny.png";
import cnc from "./resources/artist/artistCNC.png";
import guitar from "./resources/artist/artistGuitar.png";
import weld from "./resources/artist/artistWeld.png";
import "./ProfileArtist.css";

export default function ProfileArtist() {
  return (
    <div
      style={{
        contain: "paint",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: "-1",
        }}
      >
        {[...Array(20)].map((x, i) => (
          <>
            <div style={{ display: "flex" }}>
              {[...Array(15)].map((x, i) => (
                <img src={bg} style={{}} alt="" />
              ))}
            </div>
          </>
        ))}
      </div>
      <div className="craftContent" style={{ maxWidth: "400px" }}>
        <div style={{ height: "3px" }} />
        <img src={artistTitle} style={{ scale: "80%" }} alt="" />
        <h1> - I converted a schoolbus into a house</h1>
        <img src={bus} alt="" />
        <h1> - I'm proficient with a variety of artistic tools</h1>
        <img src={tools} alt="" />
        <h1> - I fancy myself a decent visual artist and animator</h1>
        <img src={bunny} alt="" />
        <h1> - I taught CNC at a local makerspace</h1>
        <img src={cnc} alt="" />
        <h1> - Music is a serious hobby of mine</h1>
        <img src={guitar} alt="" />
        <h1> - I fabricate in wood, metal, and some plastics</h1>
        <img src={weld} alt="" />
      </div>
    </div>
  );
}
