import { useEffect, useState } from "react"

export const Dark=()=>{
const [mode ,SetMode] = useState('light')
 function  changeTheme() {
    const html = document.documentElement;
    if(mode == "light"){
        html.classList.remove("light");
        html.classList.add("dark");
        SetMode("dark");
        localStorage.setItem("mode", "dark");
    }else{
        html.classList.remove("dark");
        html.classList.add("light");
        SetMode("light");
        localStorage.setItem("mode", "light");
    }

 }
  useEffect(()=>{
    const currentMode = localStorage.getItem("mode") || "light";
    document.documentElement.classList.add(currentMode);
    SetMode(currentMode)
  },[])

  return { changeTheme,mode}
}