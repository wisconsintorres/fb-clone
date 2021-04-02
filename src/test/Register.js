import React, { useContext, useState } from "react";
import './Register.css'
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import sulogo from "../../images/alt-logo-3.png";
import axios from "axios";



function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function register(e) {
        e.preventDefault();

        try {
            const registerData = {
                email,
                password,
                passwordVerify,
            };

            // await axios.post("http://localhost:3000/auth/", registerData);
            await axios.post("http://localhost:5000/auth/",
                registerData);

            await getLoggedIn();
            history.push("/");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="mainbg">
        <div className='bg'>
            <div className='form-bg-signup'>
                <div className="form-popup-su">
                    <img src={sulogo} alt="main logo" className="su-logo"/>
                    <h1 className='su-text'>Create your account!</h1>
                    <form onSubmit={register}>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <input
                            type="password"
                            placeholder="Verify your password"
                            onChange={(e) => setPasswordVerify(e.target.value)}
                            value={passwordVerify}
                        />
                        <div className="register-btn-su">
                            <button className="signup-btn-color" type="submit" >Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            <div className="footer">
                <p>&#169; 2021 Ballotr</p>
            </div>
        </div>
    );
}

export default Register;