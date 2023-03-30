import "./ProfileRenaissance.css";

import vitHeart from "./resources/vit/vitHeart.png";
import vitHead from "./resources/vit/vitHead.png";
import vitTL from "./resources/vit/vitTL.png";
import vitTR from "./resources/vit/vitTR.png";
import vitBL from "./resources/vit/vitBL.png";
import vitBR from "./resources/vit/vitBR.png";

export default function ProfileRenaissance() {
  const canvasHeight = "400px";

  return (
    <>
      <div
        style={{
          height: "300px",
          background: "#ff9999",
          contain: "paint",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            background: "#ff8080",
            height: "1600px",
            width: "1600px",
            borderRadius: "50%",
            flexShrink: 0,
            marginTop: "-600px",
            position: "absolute"
          }}
        />
        <div
          style={{
            background: "#ff6666",
            height: "900px",
            width: "900px",
            borderRadius: "50%",
            flexShrink: 0,
            marginTop: "-300px",
            position: "absolute"
          }}
        />
        <div
          style={{
            background: "#ff4d4d",
            height: "500px",
            width: "500px",
            borderRadius: "50%",
            flexShrink: 0,
            marginTop: "-100px",
            position: "absolute"
          }}
        />
        <div
          style={{
            background: "#ff3333",
            height: "200px",
            width: "200px",
            borderRadius: "50%",
            flexShrink: 0,
            marginTop: "0px",
            position: "absolute"
          }}
        />
        <div
          style={{
            background: "#ff0000",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            flexShrink: 0,
            marginTop: "50px",
            position: "absolute"
          }}
        />
      </div>
      <div>
        <img
          style={{
            position: "absolute",
            scale: "0.9",
            marginTop: "-230px",
            translate: "-32px"
          }}
          src={vitHeart}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            scale: "0.9",
            marginTop: "-290px",
            translate: "-32px"
          }}
          src={vitHead}
          alt=""
        />
        <img
          className="grow"
          style={{
            position: "absolute",
            scale: "0.9",
            marginTop: "-280px",
            translate: "-170px"
          }}
          src={vitTL}
          alt=""
        />
        <img
          className="grow"
          style={{
            position: "absolute",
            scale: "0.9",
            marginTop: "-280px",
            translate: "33px"
          }}
          src={vitTR}
          alt=""
        />
        <img
          className="grow"
          style={{
            position: "absolute",
            scale: "0.9",
            marginTop: "-150px",
            translate: "0px"
          }}
          src={vitBR}
          alt=""
        />
        <img
          className="grow"
          style={{
            position: "absolute",
            scale: "0.9",
            marginTop: "-150px",
            translate: "-170px"
          }}
          src={vitBL}
          alt=""
        />
      </div>
    </>
  );
}
