import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth ,onAuthStateChanged,signInWithEmailAndPassword, signOut,GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import App from "../../FireBase/Firebase";
export const  AuthContext=createContext(null)
  const  auth=getAuth(App)
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState(null)
    const[loading,setLoading]= useState(true)
    const googleProvider =  new GoogleAuthProvider();
    //google function
    const googleSignIn = ()=>{
             setLoading(true);
        return signInWithPopup(auth, googleProvider)
     }
    //email  function
    const userEmail =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword( auth ,email, password)
    };
    //sign in  function
    const signIn=(email,password) => {
        setLoading(true);
      return signInWithEmailAndPassword( auth ,email, password)
    };
      //sign out function
      const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }
    //keep the current user
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe
        }
    },[]);
    const authInfo ={
       userEmail,
       signIn,
       user,
       logOut,
       googleSignIn,
       loading

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;