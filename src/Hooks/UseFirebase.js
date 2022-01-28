import { getAuth,updateProfile,signOut ,GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signInWithPopup,GithubAuthProvider, sendEmailVerification } from "firebase/auth";
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
        const googleUser={displayName:user.displayName,email:user.email}
        setUser(user);
        updateUser(googleUser);
      }).catch((error) => {
        setError(error.message)
      }).finally(()=>setIsLoading(false));
    }
    // Sign in With Github

    const gitHubSignIn=()=>{
      setIsLoading(true);
      const gitHubProvider = new GithubAuthProvider();
      signInWithPopup(auth, gitHubProvider)
      .then((result) => {
      const user = result.user;
      setUser(user)
      console.log(result.user);
  }).catch((error) => {
    setError(error.message)
    console.error(error.message);
  }).finally(()=>setIsLoading(false));
    }
    // Create User With Email & Password

    const handleName=(event)=>{
      const name=(event.target.value);
      setName(name)
    }
    const handleEmail=(event)=>{
        const email=(event.target.value);
        setEmail(email)
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value)        
    }
    
    //<-------------- RegisterUser --------------->
    
    const handleRegister=(event)=>{
        event.preventDefault();
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const newUser=({...user,displayName:name});
            setUser(newUser);
            emailverify();
            updateName();
            saveUser();
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
      const auth = getAuth();
      setIsLoading(true);
      signOut(auth).then(() => {
        setUser('');
    }).catch((error) => {
      setError(error.message)
    }).finally(()=>setIsLoading(false));
    }

    // Verify User Email

    const emailverify = () =>{
      sendEmailVerification(auth.currentUser)
      .then(() => {
       
      });
    
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
  },[]);

  //<----------- Save User Info To Database ---------->

  const saveUser=()=>{
    const dbUser={displayName:name,email:email}
    fetch('https://young-meadow-11819.herokuapp.com/users',{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(dbUser)
  })
  .then(res=>res.json())
  .then(result=>{;
  })
  }

  //<----------- Update User Info To Database ---------->

  const updateUser=(googleUser)=>{
    fetch('https://young-meadow-11819.herokuapp.com/users',{
      method:"PUT",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(googleUser)
  })
  .then(res=>res.json())
  .then(result=>{;
  })
  }

return{handleEmail,handleName,handlePassword,handleRegister,error,user,handleSignIn,handleSignOut,googleSignIn,gitHubSignIn,setError,isloading}
}

export default useFirebase;