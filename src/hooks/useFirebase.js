import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `services.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    const signOutGoogle = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        services,
        user,
        signInWithGoogle,
        signOutGoogle
    }

}
export default useFirebase;