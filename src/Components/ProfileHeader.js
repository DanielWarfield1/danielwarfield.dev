export default function ProfileHeader() {
  const windowWidth = 2000;
  const windowHeight = 200;

  let points = [
    [0, 0],
    [windowWidth, 0],
    [windowWidth, 100],
    [600, 100],
    [150, 178],
    [0, 178]
  ];

  //turns points into string argument fo svg
  //"0,0 100,200 300,400 ..."
  function stringifyPoints(points) {
    let pointsStr = points
      .map(function (item) {
        return item.join(",");
      })
      .join(" ");
    return pointsStr;
  }

  return (
    <>
      <div
        style={{ background: "yellow", float: "left", padding: 0, margin: 0 }}
      >
        <svg height={windowHeight} width={windowWidth}>
          <polygon points={stringifyPoints(points)} />
        </svg>
        <div
          style={{
            position: "absolute",
            top: -73,
            left: -40,
            padding: 0,
            magrin: 0
          }}
        >
          <ul style={{ color: "yellow", textAlign: "left", fontSize: 60 }}>
            <li>DANIEL</li>
            <li>WARFIELD</li>
            <li>.DEV</li>
          </ul>
        </div>
      </div>
      <div>
        <div
          style={{
            background: "yellow",
            color: "black",
            textAlign: "left",
            height: "200px"
          }}
        >
          <p
            style={{
              fontSize: 60,
              textAlign: "center",
              position: "relative",
              top: "-6px",
              fontWeight: "bold"
            }}
          >
            PROFILE
          </p>
          <div
            style={{
              background: "black",
              position: "relative",
              top: "-80px",
              height: "25px"
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
