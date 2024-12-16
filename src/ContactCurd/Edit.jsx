import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIS } from "./Api";

export default function Edit() {
    const [Id, setId] = useState(0);
    const [Name, setName] = useState('');
    const [Phone, setphone] = useState('');
    const [Mail, setMail] = useState('');

    const navi = useNavigate();




    function handle(e) {
        e.preventDefault();



        if (Name.length > 20) {
            alert("Max 20 characters are allowed for the name.");
            return;
        }

        else if (Phone.length !== 10) {
            alert("Max 10 digits are allowed for the phone number.");
            return;
            
        }


        let finalEmail = Mail;

        if (!Mail.includes('@')){
            finalEmail = Mail + '@gmail.com'
        }

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(Mail)) {
            alert("Please enter a valid email address.");
            return;
            
        }

        else{
            alert("Edited Successfully...")
        }

        axios.put(`${APIS}/${Id}`, {user:Name, Mobile:Phone, inter:finalEmail}) // Update both name and phone
        console.log(Name, Phone,Mail);
        setName('');
        setphone('');
        setMail('');
        navi('/');
    }

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('Name'));
        setphone(localStorage.getItem('Phone'));
        setMail(localStorage.getItem('Mail')) // Retrieve phone number from localStorage
    }, []);

    return (
        <div>
            <h1>Update data</h1>
            <form onSubmit={handle}>
                <input
                    id="box"
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name..."
                />
                <input
                    id="box"
                    type="Number"
                    value={Phone}
                    onChange={(e) => setphone(e.target.value)} // Handle phone number input
                    placeholder="Enter Phone Number..."
                />

                <input
                    id="box"
                    type="text"
                    value={Mail}
                    onChange={(e) => setMail(e.target.value)} // Handle phone number input
                    placeholder="Enter Your Mail-ID..."
                />
                <input type="submit" id="crebtn"/>
            </form>
        </div>
    );
}
