import classes from "./NavBar.module.css";
import logo from "../images/3D-H-logo-removebg.png";

const NavBar = (props) => {
  return (
    <div
      className={classes.Nav}
      style={props.ShowSideBarStateNav ? { right: "0" } : { right: "-200px" }}
    >
      <ul className={classes.ul}>
        <li className={classes.li}>
          <button className={classes.button} onClick={props.ShowSideBarClick}>
            <img className={classes.img} src={logo} alt="H logo" />
          </button>
        </li>
        <li className={classes.li}>
          <button
            className={classes.liDiv}
            onClick={() => {
              window.location.href = "#";
              props.ShowSideBarClick();
            }}
          >
            Home
          </button>
        </li>

        <li className={classes.li}>
          <button
            className={classes.liDiv}
            onClick={() => {
              window.location.href = "#work-section";
              props.ShowSideBarClick();
            }}
          >
            Work
          </button>
        </li>
        <li className={classes.li}>
          <button
            className={classes.liDiv}
            onClick={() => {
              window.location.href = "#aboutsection";
              props.ShowSideBarClick();
            }}
          >
            About Me
          </button>
        </li>
        <li className={classes.li}>
          <button
            className={classes.liDiv}
            onClick={() => {
              window.location.href = "#contact";
              props.ShowSideBarClick();
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
