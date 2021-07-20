import React, {useState} from 'react';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const {target: {name, value}} = event;
    if ( name === "email" ) {
      setEmail(value);
    } else if ( name === "password" ) {
      setPassword(value);
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.name);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Please enter your E-mail address." required value={email} onChange={onChange}></input>
        <input name="password" type="password" placeholder="Please enter your password." required value={password} onChange={onChange}></input>
        <input type="submit" value="Login"></input>
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with other account</button>
        <button>Continue as guest</button>
      </div>
    </div>
  )
}
;
export default Auth;
