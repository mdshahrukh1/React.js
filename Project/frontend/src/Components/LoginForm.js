import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // React Router DOM v6 hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password); // Assuming `login` stores the token in localStorage
            alert("Login successful!");
            navigate("/categories"); // Redirect to categories
        } catch (error) {
            alert("Login failed! Check your credentials.");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
