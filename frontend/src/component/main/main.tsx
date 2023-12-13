
import {useEffect,useContext, useState, ReactNode} from "react"

import { ModeContext } from "../../App"
import { Navleft } from "../nav/navleft/navleft"
import { NavTop } from "../nav/navtop/navtop"
import "./main.css"

export const Main:React.FC<{children:ReactNode}> = ({children})=>{

    return <div className="main-container">
        <Navleft/>
        <div className="main-divide-LR">
            <NavTop/>
            <div className="main-frame-contents">
                {/* <div className="main-frame-contents-in"> */}
                        {children}
                {/* </div> */}
            </div>
        </div>
    </div>
}

