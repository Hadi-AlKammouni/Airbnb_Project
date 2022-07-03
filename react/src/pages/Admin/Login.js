import { useState } from "react";
import Input from "../../components/Input";

const Login = () => {

    // Initialize Input State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    //Add Data to Backend on if all fields are validated 
    const onSubmit = (e) => {
      e.preventDefault();
      if (!email || !password) {
        alert("Please fill both fields!");
        return;
      }
      if (password.length < 6) {
        alert("password must be at least 6 characters!");
        return;
      }
    };

    return (
      <form className="add-form" onSubmit={onSubmit}>

        <div className="form-control">
          <label>Email</label>
          <Input type={"email"} placeholder={"Insert Email"} set={setEmail} />
        </div>
  
        <div className="form-control">
          <label>Password</label>
          <Input type={"password"} placeholder={"Insert Password"} set={setPassword} />
        </div>
        
        <input type={"submit"} value="Login" className="btn btn-block" />

      </form>
    );
}

export default Login;