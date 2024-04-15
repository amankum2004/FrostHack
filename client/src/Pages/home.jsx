import "./home.css"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../Store/auth"
import {toast} from "react-toastify";


export const Home = () => {
  const [user,setUser] = useState({
    voterId:"",
    password:"",
});

const navigate = useNavigate();
// const {storeTokenInLS} = useAuth();
const {storeTokenInLS,API} = useAuth();

// handling the input values
const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,
        [name]:value,
    })
}

// handling the form submission
const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(user)
    try {
        const response = await fetch(`${API}/api/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user)
        });
        console.log("from login form",response)
        console.log(response)
        const res_data = await response.json();

        if (response.ok) {
            console.log("response from server",res_data);
            // STORE THE TOKEN IN LOCALHOST
            storeTokenInLS(res_data.token);
            // localStorage.setItem("token",res_data.token);
            setUser({email:"",password:""})
            toast.success("Login successful")
            navigate("/")
        }else{
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message ? res_data.message : "Invalid credentials")
            console.log("Invalid credentials")
        }
    } catch (error) {
        console.log(error)
    }
}



    return(
        <>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" crossOrigin="anonymous"></link>
        
    <h1>Digitalized Voting System</h1>
    <div className="container mt-5">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="voter-id"><h3>Voter ID</h3></label>
        <input type="text" 
        className="form-control" 
        id="voter-id" 
        name="voter-id" 
        placeholder="Voter id"
        autoComplete="off"
        value={user.voterId}
        onChange={handleInput}
        required/>
      </div>
      <div className="form-group">
        <label htmlFor="voter-id"><h3>Password</h3></label>
        <input type="text" 
        className="form-control" 
        id="password" 
        name="password" 
        placeholder="Password"
        autoComplete="off"
        value={user.password}
        onChange={handleInput}
        required/>
      </div>
      
      {/* <div className="container">
        <div className="row">
          <div className="col-6">
            <button type="submit" className="btn btn-primary btn-block"><b>Submit</b></button>
          </div>
        </div>
      </div> */}
      <a href="/userinfo">
        <button className="btn btn-primary" type="button">Login</button>
      </a>
    </form>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
        </>
  )

}





