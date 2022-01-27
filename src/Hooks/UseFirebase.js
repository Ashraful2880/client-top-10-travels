import { getAuth,updateProfile,signOut ,GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import iniAuthentication from "../Firebase/Firebase.init";

iniAuthentication();
const useFirebase=()=>{
    const auth = getAuth();

    // All State Here

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [user,setUser]=useState("");
    const [isloading,setIsLoading]=useState(true);

    // Signin With Google

    const googleSignIn=()=>{
      setIsLoading(true);
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      }).catch((error) => {
        setError(error.message)
      }).finally(()=>setIsLoading(false));
    }
        // Create New User With Email & Password

    const handleName=(event)=>{
      setName(event.target.value)
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value)        
    }
    const handleRegister=(event)=>{
        event.preventDefault();
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser({...user,displayName:name});
            setName("");
            updateName();
          })
          .catch((error) => {
            setError(error.message)
          }).finally(()=>setIsLoading(false));
        }

        const updateName=()=>{
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {

          }).catch((error) => {
            setError(error.message)
          });
        }
    // Handle Sign in Existing User

    const handleSignIn=(event)=>{
        event.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {            
        const user = userCredential.user;
        setUser(user);
  })
  .catch((error) => {
    setError(error.message)
  }).finally(()=>setIsLoading(false));
    }
    // Handle Sign Out

    const handleSignOut=()=>{
      setIsLoading(true);
      const auth = getAuth();
      setIsLoading(true);
      signOut(auth).then(() => {
        setUser('');
    }).catch((error) => {
      setError(error.message)
    }).finally(()=>setIsLoading(false));
    }
     // observe whether user auth state changed or not
     useEffect(()=>{
      const unsubscribed= onAuthStateChanged(auth,(user)=>{
          if(user){
              setUser(user);
          }else{
            setUser("");
          }
          setIsLoading(false);
      });
      return ()=>unsubscribed;
  },[])

return{handleEmail,handleName,handlePassword,handleRegister,error,user,handleSignIn,handleSignOut,googleSignIn,setError,isloading,setIsLoading}
}

export default useFirebase;