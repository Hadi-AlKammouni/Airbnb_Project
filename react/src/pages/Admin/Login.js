import { useState } from "react";
import Input from "../../components/Input";

const Login = () => {

    //Calling login api upon submitting login info
    const submitLogin = async (info) => {
        const res = await fetch("http://localhost:8000/api/login",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(info)
        });

        const data = await res.json();

        if (data.error === "Unauthorized"){
            window.location.reload ();
            alert(data.error);
        }else{
            localStorage.setItem("token",data.access_token);
            localStorage.setItem("user_id",data.user_id);
            localStorage.setItem("user_name",data.name);
            alert("You logged in successfully ✅");
            window.location.reload ();
            return data;
        }
    };

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
      submitLogin({ email, password });
      setEmail("");
      setPassword("");
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