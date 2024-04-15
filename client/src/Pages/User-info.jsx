import "./home.css"
import { useState } from "react"
import { useAuth } from "../Store/auth";

const defaultContactFormData = {
    state:"",
    constituency:"",
};
    
export const UserInfo = () => {
    const [contact,setContact] = useState(defaultContactFormData);

    const [userData,setUserData] = useState(true); 
    const {user,API} = useAuth();

    if (userData && user) {
        setContact({
            state:"",
            constituency:""
        });

        setUserData(false);
    }

    // handling the input values
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]:value,
        })
        // 
        // setContact((prev) => ({
        //     ...prev,
        //     [name]:value,
        // }))
    }

    // handling the form submission
    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log(contact)
        try {
            // const response = await fetch("http://localhost:27017/api/form/contact",{
            const response = await fetch(`${API}/api/form/contact`,{
                method: "POST",
                headers: {
                    'Content-Type':"application/json",
                },
                body: JSON.stringify(contact)
            });

            if(response.ok){
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                // alert("message sent successfully");
            }
        } catch (error) {
            console.log(error)
        }

    }
    
    return (
        <>
    <h1>Decentralized Voting Using Ethereum Blockchain</h1>
    <div className="container mt-5">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="state"><h3>State</h3></label>
        <input type="text" 
        className="form-control" 
        id="state" 
        name="state" 
        placeholder="State"
        autoComplete="off"
        value={contact.state}
        onChange={handleInput}/>
      </div>
      <div className="form-group">
        <label htmlFor="constituency"><h3>Constituency</h3></label>
        <input type="text" 
        className="form-control" 
        id="constituency" 
        name="constituency" 
        placeholder="Constituency"
        autoComplete="off"
        value={contact.constituency}
        onChange={handleInput}/>
      </div>
      
      <a href="/voting">
        <button className="btn btn-primary" type="button">Give Vote</button>
      </a>
    </form>
  </div>
        </>
    )
}