import React, {useState} from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if(username && password) {
            login({username, password});
        } else {
            alert("Please enter username and password");
        }
    
    }

    return (
        <div>
            <form onSubmit={handleLogin}> 
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;