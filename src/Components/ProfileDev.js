import "./ProfileDev.css";

import Typewriter from "typewriter-effect";

const txt =
  ".....................................)<br/>............................)......((.....(<br/>...........................(........)).....)<br/>....................).......)......//.....(<br/>..............._...(........__....(.....~->><br/>........,-----'.|__,_~~___<'__`)-~__--__-~->>.<<br/>........|.//..:.|.-__...~__.o)____)),__.-.'>.>-..><br/>........|.//..:.|-.\\_.\\.-\\_\\.-\\.\\.\\.~\\_..\\.->>.-.,..>><br/>........|.//..:.|_~_\\.-\\__\\.\\~'\\.\\.\\,.\\__...-<-..>><br/>........`-----._|.`..-__`--.-.~~.--.`.--~>.><br/>........._/___\\_....//)_`//..|.||]<br/>..._____[_______]_[~~-_.(.L_/..||<br/>..[____________________]'.`\\_,/'/<br/>....|||./..........|||..,___,'./<br/>....|||.\\..........|||,'______|<br/>....|||./........../||.I==||<br/>....|||.\\.......__/_||..__||__<br/>-----||-/------`-._/||-o--o---o---<br/>..~~~~~'<br/>----------------------------------<br/>";

const txt1 =
  '................................................-----<br/>............................................../......\\<br/>..............................................)......|<br/>.......:================:......................"....)/<br/>....../||..............||......................)_./*<br/>...../.||....System....||..........................*<br/>....|..||.....Down.....||...................(=====~*~======)<br/>.....\\.||.Please.wait..||..................0......\\./.......0<br/>.......==================................//...(====*====)...||<br/>............/......\\....................//.........*.........||<br/>:\\........############............\\....||....(=====*======)..||<br/>:.---------------------------------.....V..........*..........V<br/>:.|..*...|__________||.::::::::::..|....o...(======*=======).o<br/>\\.|......|..........||.............|....\\\\.........*.........||<br/>..---------------------------------.8...||...(=====*======)..//<br/>.....................................8...V.........*.........V<br/>..---------------------------------.8...=|=;..(==/.*.\\==)...=|=<br/>..\\...###########################..\\.../.!.\\....._.*.__..../.|.\\<br/>...\\..+++++++++++++++++++++++++++...\\..!.!..!..(__/.\\__)..!..!..!<br/>....\\.++++++++++++++++++++++++++++...\\........0.\\.\\V/./.0<br/>.....\\________________________________\\.....()...\\o.o/...()<br/>......*********************************.....()...........()<br/>.................................-Targon.(Ed.Wisniewski)-';

const txt3 =
  "..................................................------.------.....<br/>..+-------------+.....................___........|......|......|....<br/>..|.............|.....................\\./].......|......|......|....<br/>..|.............|........_..........._(_)........|......|......|....<br/>..|.............|.....___)).........[..|.\\___....|......|......|....<br/>..|.............|.....).//o..........|.|.....\\...|......|......|....<br/>..|.............|.._.(_....>.........|.|......]..|......|......|....<br/>..|..........__.|.(O)..\\__<..........|.|.____/...'------'------'....<br/>..|........./..o|.[/]./...\\)........[__|/_..........................<br/>..|.............|.[\\]|..(.\\.........__/___\\_____....................<br/>..|.............|.[/]|...\\.\\__..___|............|...................<br/>..|.............|.[\\]|....\\___E/%%/|____________|_____..............<br/>..|.............|.[/]|=====__...(_____________________).............<br/>..|.............|.[\\].\\_____.\\....|..................|..............<br/>..|.............|.[/========\\.|...|..................|..............<br/>..|.............|.[\\].....[]|.|...|..................|..............<br/>..|.............|.[/].....[]|.|_..|..................|..............<br/>..|.............|.[\\].....[]|___).|..................|....MEPH..........<br/>====================================================================";

const txt4 =
  "Sick.computer<br/>........._______<br/>........|.-----.|<br/>........||x...x||<br/>........||_.-._||<br/>........`--)-(--`<br/>.......__[===.o]___<br/>......|:::::::::::|\\<br/>jgs...`-=========-`()";

const txt5 =
  "Art.by.Morfina<br/>....................____.<br/>...................'*.*.'<br/>...............__/_*_*(_<br/>............../._______.\\<br/>............._\\_)/___\\(_/_.<br/>............/._((\\-.-/))_.\\<br/>............\\.\\())(-)(()/./<br/>.............'.\\(((()))/.'<br/>............/.'.\\)).))/.'.\\<br/>.........../._.\\.-.|.-./_..\\<br/>..........(...(..;''';...'..)<br/>.........._\\\"__./....)\\.__\"/_<br/>............\\/..\\...'./..\\/<br/>..............'..'...'.'.)<br/>.............././..|..\\.\\<br/>............./...........\\<br/>............/.............\\<br/>.........../.../...|...\\...\\<br/>..........'.../....b....'...'.<br/>....._.-'..../.....Bb.....'-..'-._.<br/>._.-'.......|......BBb.......'-...'-..<br/>(________mrf\\____.dBBBb.________)____)";

function TypeBlock() {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        delay: 0,
        deleteSpeed: 1,
      }}
      className="Typewriter"
      onInit={(typewriter) => {
        typewriter
          .typeString(txt)
          .pauseFor(2500)
          .deleteAll(0)
          .typeString(txt1)
          .pauseFor(2500)
          .deleteAll(0)
          .typeString(txt4)
          .pauseFor(2500)
          .deleteAll(0)
          .typeString(txt3)
          .pauseFor(2500)
          .deleteAll(0)
          .typeString(txt5)
          .pauseFor(2500)
          .deleteAll(0)
          .start();
      }}
    />
  );
}

function Header() {
  return (
    <div>
      <div
        className="devhead"
        style={{
          fontSize: "15px",
          margin: "0px",
          padding: "0px",
          borderRadius: "20px 20px 0px 0px",
          backgroundColor: "#292929",
          color: "white",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "20px",
              width: "20px",
              marginLeft: "10px",
              borderRadius: "50%",
              backgroundColor: "red",
            }}
          />
          <div
            style={{
              height: "20px",
              width: "20px",
              marginLeft: "5px",
              borderRadius: "50%",
              backgroundColor: "yellow",
            }}
          />
          <div
            style={{
              height: "20px",
              width: "20px",
              marginLeft: "5px",
              borderRadius: "50%",
              backgroundColor: "yellowgreen",
            }}
          />
        </div>
        <h1 style={{ margin: "0px", padding: "10px", width: "100%" }}>
          DEVELOPER
        </h1>
      </div>
    </div>
  );
}

function DevCH({ title, subtitle }) {
  return (
    <div>
      <span>======================================================</span>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      <span>======================================================</span>
    </div>
  );
}

export default function ProfileDev() {
  return (
    <div style={{ backgroundColor: "darkblue" }}>
      <div style={{ height: "30px" }} />
      <Header />
      <div className="devbg" style={{}}>
        <div
          style={{ justifyContent: "center", display: "flex", height: "200px" }}
        >
          <TypeBlock />
        </div>
        <div>
          <div className="devcontent">
            <DevCH
              title="Major in Mechanical Engineering, Minor in Computer Science, and Minor in Math @ U-Pitt"
              subtitle="c/o 2020"
            />
            <div className="block">
              <p>
                == MechE Academic Focus ==
                <br />
                |- Simulation and Modeling
                <br />
                |- Dynamic Systems
                <br />
                |- Microelectronics
                <br />
                |- Controls
                <br />
                <br />
                == CS Academic Focus ==
                <br />
                |- Data Science
                <br />
                |- Parallel Computing
                <br />
                |- Data Structures
                <br />
                |- DB Design
                <br />
                <br />
                == Scholarly Acheivement ==
                <br />
                |- Engineering GPA: 3.30
                <br />
                |- Mathematics GPA: 3.40
                <br />
                |- Computer Science GPA: 3.70
                <br />
                |- Cumulative GPA: 3.38
              </p>
            </div>
            <DevCH title="R&D @ Direct Dimensions" subtitle="1y 3mo" />
            <div className="block">
              <p>
                |- Designed, Manufactured,
                <br />
                | Tested, and Employed 3D Scanners
                <br />
                |<br />
                |- Developed Visual Simulation tools
                <br />
                | In Blender with Python
                <br />
                |<br />
                |- Assembled and Debuged LAN based
                <br />
                | distributed computation systems
                <br />
                |<br />
                |- Partnered with a team of
                <br />
                | graduate researchers from Johns Hopkins
                <br />
                | in fabricating a geodesic scanner
                <br />
                |<br />
                |- participated in various deployments
                <br />
                | to historic sites throught DC
                <br />
              </p>
            </div>
            <DevCH title="OK2StandUP Co-Founder" subtitle="4y 1mo" />
            <h2>
              == Lead Developer ==
              <br />
            </h2>
            <div className="block">
              <p>
                |- Vetted, Hired, and managed
                <br />
                | developers and contracting
                <br />
                | teams
                <br />
                | <br />
                |- Decided on product and
                <br />
                | business trajectory based
                <br />
                | on technical, customer, and
                <br />
                | business factors
                <br />
                | <br />
                |- Worked with technical and
                <br />
                | non technical team members
                <br />
                | to prioritize efforts
                <br />
                | <br />
                |- Led the company from technical
                <br />| debt to deploying to beta sites
              </p>
            </div>
            <h2>
              == Data Scientist ==
              <br />
            </h2>
            <div className="block">
              <p>
                |-Used AWS Sage Maker (jupyter)
                <br />
                | to perform early data science
                <br />
                | experimentation and product
                <br />
                | feasibility estimation
                <br />
                | |- Python
                <br />
                | |- Pandas
                <br />
                | |- Numpy
                <br />
                | |- Matplotlib
                <br />
                | |- SKLearn
                <br />
                | |- SciPy
                <br />
                | |- AstroPy
                <br />
                | |- PyMongo
                <br />
                | |- TF.Keras
                <br />
                | |- ...
                <br />
                |<br />
                |-Hacked vendor applications to
                <br />
                | create data collection
                <br />
                | procedures for model training
                <br />
                | |- Android
                <br />
                | |- Auto Hotkey
                <br />
                |<br />
                |-Created several models, for
                <br />
                | various use cases,
                <br />
                | surrounding posture analysis
                <br />
                | and time series health
                <br />
                | classification
                <br />
                | |- Time Series Classification
                <br />
                | |- Time Series Forcasting
                <br />
                | |- Hyperparameter Tuning
                <br />
                | |- Feature Engineering
                <br />
                | |- Data Augmentation
                <br />
                | |- Dataset Generation
                <br />
                | |- Bias Mitigation
                <br />
                |<br />
                |-Deployed dockerized models to
                <br />
                | AWS Fargate clusters
                <br />
                |<br />
                |-Functioned as the soul developer
                <br />
                | in several rounds of ML loops:
                <br />
                | |- planning
                <br />
                | |- data collection
                <br />
                | |- modeling
                <br />
                | |- testing
                <br />| |- deploying
                <br />| |- performance analysis
              </p>
            </div>
            <h2>
              == Back End Developer ==
              <br />
              (know enough to be dangerous)
              <br />
              (working on several AWS Certs)
            </h2>
            <div className="block">
              <p>
                |-Created AWS Fargate based
                <br />
                | microservice to host
                <br />
                | prediction
                <br />
                | <br />
                |-Created a proof of concept
                <br />
                | DB and application layer
                <br />
                | using MongoDB Atlas and
                <br />
                | Realm (now renamed), which
                <br />
                | was used to deploy the product
                <br />
                | to numerous facilities, and
                <br />
                | was used to secure letters of
                <br />| intent to purchase
              </p>
            </div>
            <h2>
              == Front End Developer ==
              <br />
              (Not my cup of tea, but hey
              <br />I made this website)
            </h2>
            <div className="block">
              <p>
                |-Experience leading contractors
                <br />
                | which deployed applications on
                <br />
                | both the Apple and Android
                <br />
                | stores
                <br />
                |<br />
                |-Experience leading contractors
                <br />
                | in the creation of
                <br />
                | React Native applications,
                <br />
                | which used native hooks to
                <br />
                | directly communicate with
                <br />
                | sensor SDKs
                <br />
                |<br />
                |-Created EXPO initialized
                <br />
                | React Native android
                <br />
                | applications for in-house
                <br />
                | data collection tools
                <br />
                |<br />
                |-Created PDF report generation
                <br />
                | tools using PyLaTeX
                <br />
                |<br />
                |-Created this website, which
                <br />
                | is an AWS Amplify hosted
                <br />| React, single page website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
