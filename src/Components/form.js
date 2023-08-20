import useInput from "../hooks/use-input";
import classes from "./form.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.ShowFormClickButtonForm();

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form
      className={classes.form}
      style={
        props.ShowFormState
          ? props.checkHeight > props.checkbreakpoint
            ? { position: "absolute", top: "255%", transition: "0.7s" }
            : { position: "absolute", top: "245%", transition: "0.7s" }
          : {
              position: "absolute",
              top: "-200%",
              transition: "0.7s",
            }
      }
      onSubmit={submitHandler}
    >
      <div
        className={
          firstNameHasError || emailHasError || lastNameHasError
            ? classes.controlgroupError
            : classes.controlgroup
        }
      >
        <div
          className={firstNameHasError ? classes.invalid : classes.formcontrol}
        >
          <input
            placeholder="Your Full Name"
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className={classes.errortext}>Please enter your name !</p>
          )}
        </div>
        <div className={emailHasError ? classes.invalid : classes.formcontrol}>
          <input
            placeholder="Your Email"
            type="text"
            id="name"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className={classes.errortext}>
              Please enter a valid email address !
            </p>
          )}
        </div>
        <div
          className={lastNameHasError ? classes.invalid : classes.formcontrol}
        >
          <input
            placeholder="Your Message"
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className={classes.errortext}>Please enter your message !</p>
          )}
        </div>
      </div>

      <div className={classes.formactions}>
        <button
          className={
            firstNameHasError || emailHasError || lastNameHasError
              ? classes.buttonblablaErr
              : classes.buttonblabla
          }
          disabled={!formIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
