import { useEffect, useState } from "react";
import { useAuth } from "../Store/auth";


export const Voting = () => {
    const [shop,setShop] = useState([]);
    const {authorizationToken,API} = useAuth();

    const getAllShopsData = async() => {
        try {
            const response = await fetch(`${API}/api/shop/shoplists`,{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                }
            });
            const data = await response.json();
            console.log(`shops ${data}`);
            setShop(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getAllShopsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return <>
    <section className="users-section">
        <div className="container">
            <h2>List of Parties</h2>
        </div>
        <div className="container shoplist">
            <table>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Symbol</th>
                        <th>Party Name</th>
                        <th>Candidate</th>   
                    </tr>
                </thead>
                <tbody>
                    {shop.map((curShop,index) => {
                        return <tr key={index}>
                            <td>{curShop.shopname}</td>
                            <td>{curShop.phone}</td>
                            <td>{curShop.state}</td>
                            <td>{curShop.city}</td>
                             
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </section>
    </>

};