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

    //fake user data from local json file
    useEffect(() => {
        const url = `services.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    // google authentication
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
    const signInWithGoogle = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    //Observing  user state change 

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
        return () => unsubscribed;
    }, [])

    // user signOut 
    const signOutGoogle = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    //Collect email and password from user

    const emailChangeHandling = event => {
        setEmail(event.target.value)
    }
    const passwordChangeHandling = event => {
        setPassword(event.target.value)
    }

    //Registration button handling
    const handleRegistration = event => {

        event.preventDefault();
        // console.log(email, password);
        if (password.length < 6) {
            setError('Password is too short. Need 6 Characters must')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log(result.user)
                setUser(result.user)
                setError('')

            })
            .catch(error => {
                setError(error.message)
            })

    }

    // Checking user email and password
    const signInWithEmailAndPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
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