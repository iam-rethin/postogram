import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import './navbar.css'

export const Navbar = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async() => {
        await signOut(auth)
    }

    return (
        <div className="navbar">
            <div className="navBarTitle">PostoGram</div>
            <div className="links">
                <Link className="link" to="/"><u>Home</u></Link>
                {user? <Link className="link" to="/create-post"><u>Create post</u></Link> : <Link className="link" to="/login"><u>Login</u></Link>}
                
               
            </div>
            <div className="loginDetails">
                {user && (
                    <>
                    <p>{user?.displayName}</p>
                    <img src={user?.photoURL || ""} width="50" height="50" className="profilePic"/> 
                    <button onClick={signUserOut} className="signOutButton">Sign out</button>
                    </>
                    )}
                </div>
        </div>
    )
}

//npm install react-firebase-hooks