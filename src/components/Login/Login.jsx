import React, { useState } from 'react';
import app from '../../firebase/firebase.init';
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    console.log(user)
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleFacebookSignIn = () => {
        console.log(auth, facebookProvider)
        signInWithPopup(auth, facebookProvider)

            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

 
    return (
        <div>
             <button onClick={handleGoogleSignIn}>Google login</button>
           <button onClick={handleFacebookSignIn}>Facebook Login</button> 
        </div>
    );
};

export default Login;