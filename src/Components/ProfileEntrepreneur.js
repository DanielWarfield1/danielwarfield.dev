import "./ProfileEntrepreneur.css";

import boarderh from "./resources/entrepreneur/boarder.png";
import corner from "./resources/entrepreneur/corner.png";
import boarderr from "./resources/entrepreneur/boarderr1.png";
import boarderl from "./resources/entrepreneur/boarderr2.png";
import bgmap from "./resources/entrepreneur/map.jpg";
import paper from "./resources/entrepreneur/paper.jpg";

function Frame({ content }) {
  return (
    <div style={{ contain: "paint" }}>
      <div
        style={{
          position: "absolute",
          left: "0%",
          zIndex: "-1",
          display: "block",
        }}
      >
        {[...Array(4)].map((x, i) => (
          <>
            <img
              className="blur"
              src={bgmap}
              style={{ width: "2000px", margin: "-20px" }}
              alt=""
            />
            <img
              className="blur"
              src={bgmap}
              style={{ transform: "scaleY(-1)", width: "2000px" }}
              alt=""
            />
          </>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          height: "40px",
          backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <img style={{}} alt="" />
        {[...Array(15)].map((x, i) => (
          <img className="bigshad" src={boarderh} />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          top: "0px",
        }}
      >
        <div
          style={{
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img className="bigshad" src={corner} alt="" />
          <div />
          <img className="bigshad" src={corner} alt="" />
        </div>
      </div>

      {/* lower frame frame*/}
      <div
        style={{
          position: "absolute",
          width: "100vw",
          top: "100%",
          transformOrigin: "bottom",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "40px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              top: "-40px",
            }}
          >
            <img style={{}} alt="" />
            {[...Array(15)].map((x, i) => (
              <img src={boarderh} />
            ))}
          </div>
        </div>
      </div>

      {/* lower frame squares*/}
      <div
        style={{
          position: "absolute",
          width: "100vw",
          top: "100%",
          transformOrigin: "bottom",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100vw",
            top: "-50px",
            transformOrigin: "bottom",
          }}
        >
          <div
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img className="bigshad" src={corner} alt="" />
            <img className="bigshad" src={corner} alt="" />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", width: "100vw" }}>
        {/* modify this to change height */}
        {[...Array(35)].map((x, i) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              className="bigshad"
              src={boarderr}
              style={{ width: "40px", zIndex: -1 }}
              alt=""
            />
            <img
              className="bigshad"
              src={boarderl}
              style={{ width: "40px", zIndex: -1 }}
              alt=""
            />
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100vw",
          top: "50px",
        }}
      >
        {content}
      </div>
    </div>
  );
}

function ContentBlock({ content }) {
  return (
    <div
      style={{
        display: "inline-block",
      }}
    >
      <div
        style={{
          contain: "paint",
          margin: "20px",
          maxWidth: "500px",
        }}
      >
        <div className="contentBlock" style={{}}>
          <div
            style={{
              position: "absolute",
              left: "0%",
              zIndex: "-1",
              display: "block",
              alignContent: "left",
            }}
          >
            <div style={{}}>
              {[...Array(4)].map((x, i) => (
                <img
                  src={paper}
                  style={{ width: "500px", marginTop: "-5px" }}
                  alt=""
                />
              ))}
            </div>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}

const ok2content = (
  <ContentBlock
    content=<div>
      <h1 className="subtitle"> OK2StandUP</h1>
      <p className="centered">
        ■ 3y 6mo ■ Co-Founder ■<br />
        B2B Medtech Startup
      </p>
      <h2 className="subsubtitle"> Objectives </h2>
      <p>
        <strong>I had two chief objectives at OK2:</strong>
        <br />
        <br />
        <strong>1) to learn:</strong> This was a tremendous success
        <br />
        <br />
        <br />
        <strong>2) to make money:</strong> This was an abject failure
      </p>
      <h2 className="subsubtitle"> Things I Learned </h2>
      <p>
        <strong>1) You must be capable of more than you're doing</strong>
        <br />
        <br /> In an early venture, catastrophic issues and vast unexpected time
        sinks are the rule. Makers like to handle difficult, engaging problems,
        that lie on the edge of their ability. Entrepreneurs incrementally adapt
        on existing solutions which they intimately understand.
        <br />
        <br />
        <strong>2) Your quirks will kill you</strong>
        <br />
        <br />
        In a work place setting, quirks can be mitigated by a team. In an early
        phase startup, these will increase cycle times, unnecessarily increase
        burn rate, turn away investors and potential customers, and cause
        frustration in a skeleton crew of over worked and under-compensated
        employees. You need to be very solid to be successful, which means
        understanding your shortcomings and working on them nigh obsessively.
        <br />
        <br />
        <strong>3) Sell first</strong>
        <br />
        <br />
        It's easy to trick yourself into thinking you're selling a product. But,
        you wont change the world, you wont help people, your vision wont
        matter, you'll never be able to support your employees, and you'll never
        be able to satisy investors unless you have revenue. Every other
        endeavour should be minimized as much as is possible in an early phase
        venture.
      </p>
    </div>
  />
);

const productsContent = (
  <ContentBlock
    content=<div>
      <h1 className="subtitle">***products.com</h1>
      <p className="centered">
        ■ ~3mo ■ Founder ■<br />
      </p>
      B2C Product Focused Ecommerce
      <h2 className="subsubtitle">Objectives</h2>
      <p>
        <strong>I had three chief objectives:</strong>
        <br />
        <br />
        <strong>1) Learn domains I didn't learn in OK2:</strong>
        <br />
        <br />
        Primarily, I wanted to get my feet wet in marketing, procurement,
        ecommerce, and customer management. I think this was a good step in the
        right direction.
        <br />
        <br />
        <strong>2) Make money:</strong>
        <br />
        <br />
        This was a failure
        <br />
        <br />
        <strong>
          3) Or disprove the idea with little monetary or time investment:
        </strong>
        <br />
        <br />
        This was a success.
      </p>
      <h2 className="subsubtitle"> Things I Learned </h2>
      <p>
        <strong>1) Everything can break a company</strong>
        <br />
        <br /> I still stand by the idea of this company. I think the idea to
        apply an existing technology, with existing products, to a new market
        was a good one, but the market I was targeting has heavy marketing
        restrictions, meaning it was prohibatively expensive to find a target
        market and attempt product-market fit. I didn't anticipate marketing to
        be a serious issue, but it was. I decided to keep this idea in my back
        pocket and move forward.
      </p>
    </div>
  />
);

const aspContent = (
  <ContentBlock
    content=<div>
      <h1 className="subtitle">asp***.com</h1>
      <p className="centered">
        ■ ~2mo ■ Founder ■<br />
      </p>
      B2C Segment Focused Ecommerce
      <h2 className="subsubtitle">Objectives</h2>
      <p>
        <strong>I had two chief objectives:</strong>
        <br />
        <br />
        <strong>1) Improve on marketing issues from ***products:</strong>
        <br />
        <br />
        I opted to make asp***, a general homegoods store, which I assumed would
        be a good space to make a variety of advertisements about a variety of
        products. I ended up making a TikTok add campaign with a 2% click
        through rate. So, this was somewhat successful.
        <br />
        <br />
        <strong>2) Make money:</strong>
        <br />
        <br />I did make revenue, somewhat consistently, but my products were
        not differentiated enough to attract conversions at a high enough
        percentage to offset my marketing expenses. So, this was a failure, but
        a promising one.
      </p>
      <h2 className="subsubtitle"> Things I Learned </h2>
      <p>
        <strong>1) What oversaturated really means</strong>
        <br />
        <br />
        E-commerce is a booming segment, with a huge number of players in the
        game. You need good products, at good prices, with the right marketing
        and sales channels to be successful. You might be good enough to land
        sales, but the cost to acquire customers is not free. If you can't
        provide substantial differentiated value, you wont have margins large
        enough to fork the necessary money for customer acquisition.
      </p>
    </div>
  />
);

const hatsContent = (
  <ContentBlock
    content=<div>
      <h1 className="subtitle">***hats.store</h1>
      <p className="centered">
        ■ ~2mo ■ Founder ■ WIP ■<br />
      </p>
      B2C Segment Focused Ecommerce
      <h2 className="subsubtitle">Objective</h2>
      <p>
        To use what I learned to start a successful e-commerce company. I'm not
        sure if this will be successful or not, yet. I've focused so far on
        organic traffic, which hasn't been successful. I plan on transitioning
        back towards advertisements.
      </p>
      <h2 className="subsubtitle"> Things I Learned </h2>
      <p>
        <strong>1) Social media is hard</strong>
        <br />
        <br />
        Between algorithmic priority, the sheer volume of high quality content
        by an army of avid content creators, consumers ever growing distaste of
        marketed material, and an unstable fast moving economy; getting organic
        traffic from social media is no cake walk.
      </p>
    </div>
  />
);

const content = (
  <div style={{}}>
    <div>
      <ContentBlock
        content=<div style={{ marginBottom: "10px" }}>
          <h1 className="title">Entrepreneur</h1>
          <p className="centered quote1">
            "Scar tissue is new growth, and it is tougher than skin innocent to
            the blade".
          </p>
          <p className="centered quote2">
            <br />
            <br />- Shelly Jackson
          </p>
        </div>
      />
    </div>
    {/* <div>{ok2content}</div> */}
    <div>{productsContent}</div>
    <div>{aspContent}</div>
    <div>{hatsContent}</div>
    <div style={{ height: "50px" }} />
  </div>
);

export default function ProfileEntrepreneur() {
  return (
    <div>
      <Frame content={content} />
    </div>
  );
}
