import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
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
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
    }, [])

    const signOutGoogle = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    const emailChangeHandling = event => {
        setEmail(event.target.value)
    }
    const passwordChangeHandling = event => {
        setPassword(event.target.value)
    }
    const handleRegistration = event => {
        event.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password is too short. Need 6 Characters must')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setError('')

            })
            .catch(error => {
                setError(error.message)
            })

    }
    const signInWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return {
        services,
        user,
        error,
        signInWithGoogle,
        signOutGoogle,
        emailChangeHandling,
        passwordChangeHandling,
        handleRegistration,
        signInWithEmailAndPassword

    }

}
export default useFirebase;