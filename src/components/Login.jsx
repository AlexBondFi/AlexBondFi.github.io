import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, loginWithEmailAndPassword } from "../auth/firebase";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate('/countries')
    },[user, loading, navigate])

    return (
        <div className="loginform">
            <h3>Welcome</h3>
            <p>Please login to see the content</p>
            <input className="inputfield"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input className="inputfield"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <Button className="my-3" onClick={() => loginWithEmailAndPassword(email, password)}>Login</Button>
            <div>
                Don't have an account?
                <Link to="/register">Register</Link>
            </div>
            Account for testing: admin@admin.com pass: 12345678
        </div>
    )

}

export default Login;