import axios from "axios";
import { useEffect, useState } from "react";
import { APIS } from "./Api";
import { Link, useNavigate } from "react-router-dom";

export default function GetData() {
    const [Name,setName] = useState([]);

    useEffect(() => {
        axios.get(APIS).then((y) =>{
            console.log(y.data);
            setName(y.data)
            
        });
    },[]);

    function del (id, event) {
        event.preventDefault();
        console.log(id);

        axios.delete(`${APIS}/${id}`).then(() =>{
            axios.get(APIS).then((y) => {
                console.log(y.data);
                setName(y.data)
                
            });
        });
    }
        
        const navi = useNavigate();
        function edit(id, user, call, inter,  event){
            event.preventDefault();
            console.log(id, user, call, inter);
            localStorage.setItem("id", id);
            localStorage.setItem("Name", user);
            localStorage.setItem("Phone", call);
            localStorage.getItem("Mail",inter)
            navi("/edit");


            
        }
        
    
    return(
        <div id="GetData">
            <h1>Read Data</h1>
        <Link to={'/new'} id="Create">Create Data</Link> <br /><br />           

        {Name.length > 0 ? (
            <div class ="table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PHONE</th>
                        <th>Mail-ID</th>
                        <th>DELETE</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
          

            <tbody>
            {Name.map((r)=>(
                <tr>
                    <td>{r.id}</td>
                    <td>{r.user}</td>
                    <td>{r.call}</td>
                    <td>{r.inter}</td>
                    <td><button onClick={(event)=> del(r.id, event)}>Delete</button></td>
                    <td><button onClick={(event) => edit(r.id, r.user, r.Mobile, r.inter, event )}>Edit</button></td>


                </tr>
            ))}
            </tbody>
            </table>
            </div>
        ) : (
            <p>NO Data Available</p>
        )}
        </div>
    );
}