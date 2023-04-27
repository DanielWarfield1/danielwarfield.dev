import resumeImg from "./resources/resume/resumeImg.png";
import coverImg from "./resources/resume/coverletterimg.jpg";

export default function ResumeView() {
  return (
    <div>
      <h1>Resume</h1>
      <div style={{ margin: "10px" }}>
        <img style={{ maxWidth: "200px" }} src={resumeImg} />
      </div>
      <a
        style={{ color: "black" }}
        href="https://drive.google.com/file/d/12xz01qeA1HBZY_RHcvS-oftGT4yOTsKy/view?usp=share_link"
      >
        View .pdf
      </a>
      <h1>Cover Letter</h1>
      <div style={{ margin: "10px" }}>
        <img style={{ maxWidth: "200px" }} src={coverImg} />
      </div>
      <a
        style={{ color: "black" }}
        href="https://drive.google.com/file/d/1POpY8niId0ZeCzqwLXXHO0GRIE7cj0oy/view?usp=sharing"
      >
        View .pdf
      </a>
    </div>
  );
}
