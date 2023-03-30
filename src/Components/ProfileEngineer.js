import "./ProfileEngineer.css";
import { ReactComponent as Graduation } from "./resources/engineer/mortarboard.svg";
import { ReactComponent as Model3d } from "./resources/engineer/3d-model.svg";
import { ReactComponent as Simulation } from "./resources/engineer/vitals-opt.svg";
import { ReactComponent as Circuit } from "./resources/engineer/circuit.svg";
import prost from "./resources/engineer/prost.png";
import ga from "./resources/engineer/ga.png";
import pendulum from "./resources/engineer/pendulum.png";
import forageWagon from "./resources/engineer/forageWagon.png";
import pcbSShot from "./resources/engineer/pcbSShot.png";

function RoboArm() {
  return (
    <div style={{ display: "flex" }}>
      <div id="roboarm1">
        <div id="roboarm2">
          <div
            style={{
              width: "24px",
              height: "24px",
              marginLeft: "-10px",
              marginTop: "-6px",
              borderRadius: "50%",
              position: "absolute",
              outlineWidth: "3px",
              outlineStyle: "solid",
              backgroundColor: "darkblue"
            }}
          ></div>
          <div id="roboarm3">
            <div
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "-10px",
                marginTop: "-6px",
                borderRadius: "50%",
                position: "absolute",
                outlineWidth: "3px",
                outlineStyle: "solid",
                backgroundColor: "darkblue"
              }}
            ></div>
            <div id="roboarm4">
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  marginLeft: "30px",
                  marginTop: "-3px",
                  borderRadius: "50%",
                  position: "absolute",
                  outlineWidth: "3px",
                  outlineStyle: "solid",
                  backgroundColor: "darkblue"
                }}
              ></div>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  marginLeft: "38px",
                  marginTop: "-10px",
                  borderRadius: "50%",
                  position: "absolute",
                  outlineWidth: "3px",
                  outlineStyle: "solid",
                  backgroundColor: "darkblue"
                }}
              ></div>
            </div>
            <div id="roboarm5">
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "-10px",
                  marginTop: "-6px",
                  borderRadius: "50%",
                  position: "absolute",
                  outlineWidth: "3px",
                  outlineStyle: "solid",
                  backgroundColor: "darkblue"
                }}
              ></div>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  marginLeft: "30px",
                  marginTop: "-3px",
                  borderRadius: "50%",
                  position: "absolute",
                  outlineWidth: "3px",
                  outlineStyle: "solid",
                  backgroundColor: "darkblue"
                }}
              ></div>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  marginLeft: "38px",
                  marginTop: "2px",
                  borderRadius: "50%",
                  position: "absolute",
                  outlineWidth: "3px",
                  outlineStyle: "solid",
                  backgroundColor: "darkblue"
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div
      className="solidol"
      style={{
        marginLeft: "5px",
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div className="solidol" style={{ display: "flex", width: "100px" }}>
        <div
          className="solidol"
          style={{
            display: "flex",
            width: "100px",
            height: "100px",
            outlineWidth: "5px",
            outlineColor: "white",
            borderRadius: "50%",
            contain: "paint"
          }}
        >
          <RoboArm />
        </div>
      </div>
      <div className="solidol" style={{ display: "flex" }}>
        <div
          className="dotol"
          style={{
            display: "flex",
            marginLeft: "20px",
            marginRight: "20px"
          }}
        >
          <div
            className="dotol"
            style={{
              display: "flex",
              marginTop: "20px",
              marginBottom: "20px",
              alignItems: "center"
            }}
          >
            <div
              style={{
                argin: "auto",
                width: "100%"
              }}
            >
              <h1
                style={{
                  margin: "0px"
                }}
              >
                ENGINEER
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content({ img, content }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="solidol"
        style={{
          marginLeft: "5px",
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "700px"
        }}
      >
        <div
          style={{
            outlineStyle: "solid",
            outlineWidth: "1px",
            outlineColor: "white",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              outlineStyle: "dashed",
              outlineWidth: "1px",
              outlineColor: "white",
              width: "50px",
              height: "100%",
              marginLeft: "25px",
              marginRight: "25px"
            }}
          ></div>
          <div
            style={{
              width: "80px",
              height: "80px",
              position: "absolute",
              outlineStyle: "solid",
              outlineWidth: "5px",
              backgroundColor: "darkblue",
              borderRadius: "50%",
              contain: "paint"
            }}
          >
            {img}
          </div>
        </div>
        <div style={{ padding: "10px", width: "100%", textAlign: "left" }}>
          {content}
        </div>
      </div>
    </div>
  );
}

// ===================== CONTENT ================

const engr1 = (
  <div>
    <h2 style={{ textAlign: "center" }}>Academics</h2>
    <p>
      <strong>School:</strong> University of Pittsburgh co 2020
    </p>
    <p>
      <strong>Bachelors:</strong> Mechanical Engineering
    </p>
    <p>
      <strong>Minors:</strong> Computer Science & Mathematics
    </p>
    <p>
      <strong>Engineering GPA:</strong> 3.30
      <br />
      <strong>Mathematics GPA:</strong> 3.40
      <br />
      <strong>Computer Science GPA:</strong> 3.70
      <br />
      <strong>Cumulative GPA:</strong> 3.38
    </p>
  </div>
);

const engr2 = (
  <div>
    <h2 style={{ textAlign: "center" }}>Design and Construction</h2>
    <p>
      <strong>Company:</strong> DRDI
    </p>
    <p>
      <strong>Duration:</strong> 1y, 3mo (internship)
    </p>
    <p>
      <strong>Topic:</strong> 3D Scanner construction
    </p>
    <p>
      <strong>Summary:</strong> At DRDI (Direct Dimensions), my chief
      responsability was the construction and modification of 3D scanners. I
      primarily worked on photogrammetry scanners, which use sets of pictures
      taken at different angles to create 3D models. I created experimental
      prototypes, created custom scripts in Blender to simulate different camera
      arrays, and ultimatly designed and fabricated one complete scanner and a
      portion of a second.
    </p>
    <p>
      <strong>Key Skills:</strong> Linux, CAD, Fabrication, 3D modeling,
      Photogrammetry
    </p>
  </div>
);

const engr3 = (
  <div>
    <h2 style={{ textAlign: "center" }}>Modeling and Simulation</h2>
    <div
      className="dotol"
      style={{ padding: "10px", width: "100%", textAlign: "center" }}
    >
      <p style={{ textAlign: "left" }}>
        <strong>Topic:</strong> Modeling the anterior muscles of the human thumb
        <br />
        <br />
        <strong>Summary:</strong> Created an idealized model of the anterior
        muscles of the human thumb, and used MATLAB to simulate forces through
        that model under a variety of load conditions and postures.
      </p>
      <p>
        <div style={{ margin: "10px" }}>
          <img className="exampleImg" src={prost} />
        </div>
      </p>

      <a
        style={{ color: "white" }}
        href="https://docs.google.com/document/d/1lj2kC841RfyXKGmAPhDS6EDFUkLvAcc7/edit?usp=sharing&ouid=110008747081035098363&rtpof=true&sd=true"
      >
        View Paper
      </a>
    </div>
    <div
      className="dotol"
      style={{ padding: "10px", width: "100%", textAlign: "center" }}
    >
      <p style={{ textAlign: "left" }}>
        <strong>Topic:</strong> Genetic Schedule Optimization
        <br />
        <br />
        <strong>Summary:</strong> Created a genetic algorithm which was used to
        optimize scheduling. Genetic algorithms are a phenomenal optimization
        strategy for computationally complex problems which obey simple,
        descriptive rules. In essence, to use a GA, one restructures a potential
        solution into a chromosome, with the constituent elements of the
        solution being a nucleotide within the chromosome, and restructures the
        criteria for a solution into a fitness function, which judges the
        fitness of a particular chromosome. By using survival of the fittest,
        crossover, and mutation, one effectively "breeds" a solution from a
        random population of chromosomes, each with randomly initialized
        nucleotides. Written in python.
      </p>
      <p>
        <div style={{ margin: "10px" }}>
          <img className="exampleImg" src={ga} />
        </div>
      </p>

      <a
        style={{ color: "white" }}
        href="https://drive.google.com/file/d/1GdTeDUCg4r9MBm9oL97FVmwY0_tfO9W1/view?usp=sharing"
      >
        View Paper
      </a>
    </div>
    <div
      className="dotol"
      style={{ padding: "10px", width: "100%", textAlign: "center" }}
    >
      <p style={{ textAlign: "left" }}>
        <strong>Topic:</strong> Physics Simulation With State Management
        <br />
        <br />
        <strong>Summary:</strong> Used simulink to create a parallelized physics
        simulation of a double pendulum, with a mutable state which was
        accessible to a variety of inputs simultaniously.
      </p>
      <p>
        <div style={{ margin: "10px" }}>
          <img className="exampleImg" src={pendulum} />
        </div>
      </p>

      <a
        style={{ color: "white" }}
        href="https://docs.google.com/document/d/15Ioxcqct3-HSJc0rr3ezo7WT8LGfxWLo/edit?usp=share_link&ouid=110008747081035098363&rtpof=true&sd=true"
      >
        View Paper
      </a>
    </div>
    <div
      className="dotol"
      style={{ padding: "10px", width: "100%", textAlign: "center" }}
    >
      <p style={{ textAlign: "left" }}>
        <strong>Topic:</strong> Parametric Modeling with Force Analysis
        <br />
        <br />
        <strong>Summary:</strong> Modeled a design problem in Matlab, and
        explored various potential solutions with force simulation.
      </p>
      <p>
        <div style={{ margin: "10px" }}>
          <img className="exampleImg" src={forageWagon} />
        </div>
      </p>

      <a
        style={{ color: "white" }}
        href="https://drive.google.com/file/d/1dAfr-grA9KKFraEhaD36HypLwdsyb9Wl/view?usp=share_link"
      >
        View Paper
      </a>
    </div>
  </div>
);

const engr4 = (
  <div>
    <h2 style={{ textAlign: "center" }}>Electronics</h2>
    <p>
      <strong>Academic Focus:</strong> Microelectronics, Embeded Systems, and
      PCB Design
    </p>
    <p>
      <strong>Summary: </strong>I essentially turned my college senior design
      project into a 2 year intensive study of microelectroncis. I prototyped,
      designed, and assembled surface mount PCBs which were used to drive a
      prototype prosthetic hand.
    </p>
    <p>
      Some notable modules include:
      <ul>
        <li>
          A bespoke motor feedback module using polled hall-effect sensors
        </li>
        <li>
          A custom stepper motor driver, which was able to convert PWM signals
          into FM signals, store configuration memory using EEPROM, and modulate
          motor voltage to enable variable torque
        </li>
        <li>
          A variety of MUX based communication routers to facilitate a daisy
          chained SPI communication system
        </li>
      </ul>
      <div style={{ padding: "10px", width: "100%", textAlign: "center" }}>
        <p>
          <div style={{ margin: "10px" }}>
            <img className="exampleImg" src={pcbSShot} />
          </div>
        </p>
        <a
          style={{ color: "white" }}
          href="https://docs.google.com/document/d/1GHoBZPYLZUVG095S16e8enaUlIFIx40Arw8zzF_xYK8/edit?usp=share_link"
        >
          View Paper
        </a>
      </div>
    </p>
  </div>
);

export default function ProfileEngineer() {
  return (
    <>
      <div className="blueprint">
        <Banner />
        <div style={{ justifyContent: "center" }}>
          <Content
            img={
              <Graduation
                className="svg1"
                viewBox="130 -30 600 900"
                style={{ width: "100px", height: "100px" }}
              />
            }
            content={engr1}
          />
          <Content
            img={
              <Model3d
                className="svg1"
                viewBox="130 20 600 900"
                style={{ width: "100px", height: "100px" }}
              />
            }
            content={engr2}
          />
          <Content
            img={<Simulation style={{ width: "100px", height: "100px" }} />}
            content={engr3}
          />
          <Content
            img={<Circuit style={{ width: "100px", height: "100px" }} />}
            content={engr4}
          />
        </div>
      </div>
    </>
  );
}
