import {useState} from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../src/firebase.init'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = (app) =>{
    const [user,setUser] = useState({});

    const signInWithGoogle = () =>{
      signInWithPopup(auth, googleProvider)
          .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user)
         })
         .catch(error=>{
            console.log(error)
         })
    }
    return {
         user,signInWithGoogle
        };
}
export default useFirebase;