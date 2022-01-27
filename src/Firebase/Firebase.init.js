import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const iniAuthentication=()=>{
    initializeApp(firebaseConfig)
}

export default iniAuthentication;