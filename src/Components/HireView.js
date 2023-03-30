import "./HireView.css";
import Navbar from "./Navbar.js";

export default function HireView() {
  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: "90%",
          maxWidth: "500px"
        }}
      >
        <div class="hireView">
          <h1>Send Inquiry</h1>
          <form action="https://formspree.io/f/xnqybevb" method="POST">
            <div>
              <label>
                <h2>Your Email</h2>
                <input
                  type="email"
                  name="email"
                  style={{
                    fontSize: "15pt",
                    height: "35px",
                    width: "100%",
                    borderRadius: "10px",
                    backgroundColor: "white"
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                <h2>Your Message</h2>
                <textarea
                  name="message"
                  style={{
                    width: "100%",
                    fontSize: "15pt",
                    height: "30vh",
                    borderRadius: "10px",
                    backgroundColor: "white"
                  }}
                ></textarea>
              </label>
            </div>
            <div>
              <button
                type="submit"
                style={{
                  margin: "15px",
                  width: "180px",
                  fontSize: "20pt",
                  height: "50px",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
