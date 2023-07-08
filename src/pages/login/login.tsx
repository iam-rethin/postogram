import { auth, provider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './login.css';

export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result)
        navigate("/")
    }

    return (
        
        <div className='signIn'>
            <p>Sign in with google to continue</p>
            <button className='signInButton' onClick={signInWithGoogle}>Sign in</button>
        </div>
    )
}