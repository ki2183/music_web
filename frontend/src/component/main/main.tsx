
import {useEffect,useContext, useState} from "react"

import { ModeContext } from "../../App"
import { Navleft } from "../nav/navleft/navleft"
import { NavTop } from "../nav/navtop/navtop"

export const Main:React.FC = ()=>{
    
    const {mode,toggleMode} = useContext(ModeContext)

    return <div style={{width:"100%",height:"100%"}} onClick={toggleMode}>
        <Navleft/>
        <NavTop/>
    </div>
}

