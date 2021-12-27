import React, { useEffect, useState } from 'react';
import axios from 'axios';


import phoneImg from "../assets/phone.svg";
//import woman from "../assets/woman.svg";
import man from "../assets/man.svg";
import mail from "../assets/mail.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import growingMan from "../assets/growing-up-man.svg";
//import growingWoman from "../assets/growing-up-woman";


const Card = () => {

    const api = "https://randomuser.me/api/";
    const [user, setUser] = useState([]);
    
    const userData = async() => {const dataFirst = await axios(api).then(res => (res.data.results[0]))
        .catch((err) => console.log(err));   
        console.log(dataFirst);
        const {
            name:{title, first, last},
            dob:{age},
            location:{city, country},
            phone,
            picture:{large},
            email,
            gender,
            login:{password}
        } = dataFirst;

        setUser({
            title, first, last, age, city, country, phone, large, email, gender, password 
        });
    };
    const{title, first, last, age, city, country, phone, large, email, gender, password} = user;
    console.log(email);
    useEffect(() => userData(), []);
    
    console.log(user);        

    return (
        <div className='card-container'>
            <div>
                <img className='personImg' src={man} alt="" />
            </div>
            <div className='topInfo'>
                <p>{first}</p>
                <span>{title}</span>
            </div>
            <div className='infoIcon'>
                <div><img src={man} alt="" /></div>
                <div><img src={mail} alt="" /></div>
                <div><img src={growingMan} alt="" /></div>
                <div><img src={map} alt="" /></div>
                <div><img src={phoneImg} alt="" /></div>
                <div><img src={padlock} alt="" /></div>
            </div>
            <div className='buttons'>
                <button>NEW USER</button>
                <button>ADD USER</button>
            </div>
        </div>
    )
}

export default Card;
