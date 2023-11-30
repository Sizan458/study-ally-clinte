import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth ,onAuthStateChanged,signInWithEmailAndPassword, signOut,GoogleAuthProvider ,signInWithPopup, updateProfile} from "firebase/auth";
import App from "../../FireBase/Firebase";
import useAxios from "../useAxios/useAxios";
export const  AuthContext=createContext(null)
  const  auth=getAuth(App)
const AuthProvider = ({children}) => {
    const axios =useAxios()
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
    //user profile update function
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    //keep the current user
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            //send user data
            if(currentUser){
                const logUser={email:currentUser.email}
                
                axios.post('/access-token',logUser)
                .then(res=>{
                    console.log("token",res.data);
                })
            }
            

        });
        return ()=>{
            unSubscribe
        }
    },[axios]);
    const authInfo ={
       userEmail,
       signIn,
       user,
       logOut,
       googleSignIn,
       loading,
      updateUserProfile

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;