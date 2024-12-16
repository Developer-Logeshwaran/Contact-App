import axios from "axios";
import { useState } from "react";
import { APIS } from "./Api";
import { useNavigate } from "react-router-dom";

export default function Create() {
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
            alert("Max 10 digits are allowed for the phone number.")
            return;
        }

        let finalEmail = Mail;

        if (!Mail.includes('@')){
            finalEmail = Mail + '@gmail.com'
        }

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(finalEmail)) {
            alert("Please enter a valid email address.");
            return;
        }

        else{
            alert("Created Successfully...")
        }



        console.log(Name, Phone, Mail);
        axios.post(APIS, { user: Name, call: Phone, inter: finalEmail });
        setName('');
        setphone('');
        setMail('');
        navi('/')

    }

    return (
        <form onSubmit={handle}>
            <h1>Create Data</h1>
            <input id="box" type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name..." />
            <input id="box" type="Number" value={Phone} onChange={(e) => setphone(e.target.value)} placeholder="Enter Your Number..." />
            <input id="box" type="text" value={Mail} onChange={(e) => setMail(e.target.value)} placeholder="Enter Your Mail-ID..." />
            <input type="submit" id="crebtn" />

        </form>
    )
}
