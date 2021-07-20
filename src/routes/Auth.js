import { authService, firebaseInstance } from 'FBase';
import React, {useState} from 'react';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {target: {name, value}} = event;
    if ( name === "email" ) {
      setEmail(value);
    } else if ( name === "password" ) {
      setPassword(value);
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if ( newAccount ) {
        //  create new account
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      // console.log(error.message);
      setError(error.message);
    }
  }

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    console.log(event.target.name);
    const {
      target : {name}
    } = event;

    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } // else if (name === "") {}
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Please enter your E-mail address." required value={email} onChange={onChange}></input>
        <input name="password" type="password" placeholder="Please enter your password." required value={password} onChange={onChange}></input>
        <input type="submit" value={ newAccount ? "Create Account" : "Login" }></input>
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Login" : "Create Account"}</span>
      <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>
        <button name="LoginWithMail">Continue with other account</button>
        <button name="guest">Continue as guest</button>
      </div>
    </div>
  )
};

export default Auth;
