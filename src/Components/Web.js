import classes from "./Web.module.css";
import myPhoto from "../images/photo2.png";
import back1 from "../images/turned-gray-laptop-computer.jpg";
import back2 from "../images/5809368.jpg";
import back3 from "../images/R.jpg";
import { useState } from "react";
import BasicForm from "./form";
import useViewport from "../hooks/use-viewPort";

const Web = (props) => {
  const [ShowForm, setShowForm] = useState(false);
  const height = useViewport();
  const breakpoint = 740;

  const ShowFormHandler = (event) => {
    setShowForm(!ShowForm);
  };

  const ShowSideBarClickWeb = () => {
    if (props.ShowSideBarState) {
      return props.ShowSideBarClickButton();
    }
  };

  return (
    <div onClick={ShowSideBarClickWeb} className={classes.container}>
      <div className={classes.Web}>
        <button
          style={
            props.ShowSideBarState
              ? { right: "-200px" }
              : { top: "0", right: "0" }
          }
          className={classes.buttonOpen}
          onClick={props.ShowSideBarClickButton}
        >
          <span
            style={{ fontSize: "40px", padding: "3px" }}
            class="material-symbols-outlined"
          >
            menu
          </span>
        </button>

        <div className={classes.homeflex}>
          <img className={classes.photo} src={myPhoto} alt="Pic" />
          <div className={classes.home} id="home-section">
            <p className={classes.p}>
              Hi,
              <br /> I'm Hussein
            </p>
            <p className={classes.p1}>Web Developer</p>
          </div>
        </div>
      </div>

      <div className={classes.work} id="work-section">
        <h1 className={classes.h1s}>My Services</h1>
        <div className={classes.workContainer}>
          <div
            style={{ backgroundImage: `url(${back1})` }}
            className={classes.workList}
          >
            <div className={classes.layer}>
              <p className={classes.pWeb}>
                Building Web Apps using <b>React.js</b> and <b>Node.js</b>
              </p>
            </div>
            <div className={classes.workShow}>
              <div className={classes.workCard}>
                <span
                  style={{ color: "white", marginRight: "1rem" }}
                  class="material-symbols-outlined"
                >
                  web
                </span>
                <h3 style={{ color: "white", margin: "0" }}>
                  Web Applications
                </h3>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${back2})` }}
            className={classes.workList}
          >
            <div className={classes.layer}>
              <p className={classes.pWeb}>
                Building Mobile Apps using <b>React Native</b>
              </p>
            </div>
            <div className={classes.workShow}>
              <div className={classes.workCard}>
                <span
                  style={{ color: "white", marginRight: "1rem" }}
                  class="material-symbols-outlined"
                >
                  devices
                </span>
                <h3 style={{ color: "white", margin: "0" }}>
                  Mobile Applications
                </h3>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${back3})` }}
            className={classes.workList}
          >
            <div className={classes.layer}>
              <p className={classes.pWeb}>
                Building <b>Python</b> Apps
              </p>
            </div>
            <div className={classes.workShow}>
              <div className={classes.workCard}>
                <span
                  style={{ color: "white", marginRight: "1rem" }}
                  class="material-symbols-outlined"
                >
                  code
                </span>
                <h3 style={{ color: "white", margin: "0" }}>
                  Python Applications
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about-section" className={classes.about}>
        <div id="message" className={classes.aboutSide}>
          <BasicForm
            checkbreakpoint={breakpoint}
            checkHeight={height}
            ShowFormState={ShowForm}
            ShowFormClickButtonForm={ShowFormHandler}
          ></BasicForm>

          <button
            style={
              ShowForm
                ? { top: "-200px" }
                : height < breakpoint
                ? { top: "250%" }
                : { top: "260%" }
            }
            onClick={ShowFormHandler}
            className={classes.send}
          >
            Send a Message
          </button>
        </div>
        <div id="aboutsection" className={classes.aboutInfo}>
          <h1>About me</h1>
          <p className={classes.p2}>
            Hello , I'm <b> Hussein Chreif </b>:
            <br />
            <br />
            Computer and Communication Engineer , and a Web Developer .
          </p>
          <h2>Education :</h2>
          <ul className={classes.ul}>
            <li className={classes.li}>
              School : Graduated from Al Mahdi High School .
            </li>
            <li className={classes.li}>
              University : bachelor in Computer and Communication engineering .
            </li>
            <li className={classes.li}>
              <b>Currently taking a training internship at Bytetactix .</b>
            </li>
          </ul>
          <h2>My Skills :</h2>
          <ul className={classes.ul}>
            <li>
              <h3>Web development :</h3>
              <ul style={{ listStyleType: "disc" }}>
                <li className={classes.li}>
                  Front-end part : <b>React.js</b>
                </li>
                <li className={classes.li}>
                  Back-end part : <b>Node.js</b>
                </li>
              </ul>
            </li>
            <li>
              <h3>Others :</h3>
              <ul style={{ listStyleType: "disc" }}>
                <li className={classes.li}>
                  Expert in <b>Python programming</b>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div id="contact" className={classes.contact}>
        <h1>
          Contact me :{"   "}
          <div className={classes.contactContainer}>
            <a
              rel="noreferrer"
              href="https://wa.me/96181660787"
              target="_blank"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/houssein-chreif/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://instagram.com/husseinchreif_?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/Husseinchr"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Web;
