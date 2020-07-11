import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

function SignUp() {
  const history = useHistory();

  const [userCredentials, setUserCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { email, password, username } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        return userAuth.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    history.push("/");
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <form className="sign-up" onSubmit={handleSubmit}>
      <center>
        <img
          className="instagram-logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram"
        />
      </center>
      <FormInput
        name="username"
        type="text"
        handleChange={handleChange}
        value={username}
        label="username"
        required
      />
      <FormInput
        name="email"
        type="email"
        handleChange={handleChange}
        value={email}
        label="email"
        required
      />
      <FormInput
        name="password"
        type="password"
        handleChange={handleChange}
        value={password}
        label="password"
        required
      />

      <CustomButton type="submit"> Sign up</CustomButton>
      <p>
        already have a account? <Link to="/signin"> Log in </Link>{" "}
      </p>
    </form>
  );
}

export default SignUp;
