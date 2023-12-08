import { useEffect, useState } from "react"
import { Mode, darkmode, lightmode } from "../interface/mode"

export const useMode = ()=>{
    const [mode,setMode] = useState<Mode>(lightmode)

    const setlocal = (mode:Mode)=>{
        mode === lightmode
        ? window.localStorage.setItem("mode","light")
        : window.localStorage.setItem("mode","dark")
        setMode(mode)
    }

    const toggleMode = ()=>{
        mode === lightmode ? setlocal(darkmode): setlocal(lightmode)
        console.log('as')
    }
    useEffect(()=>{
        const localMode = window.localStorage.getItem('mode')
        if(localMode !== null){
            if(localMode === 'light'){
                setMode(lightmode)
            }else{
                setMode(darkmode)
            }

        } 
    },[])
    return {mode,toggleMode}
}