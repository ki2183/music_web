import { lightmode } from "../../../interface/mode"
import "./navleft.css"
import { ModeContext } from "../../../App"
import { useContext } from "react"
interface ListProps{
    icon:string,
    title:string 
}

export const Navleft:React.FC = ()=>{
    const {mode, toggleMode} = useContext(ModeContext)
    const list_arr:ListProps[] = [
        {
            icon:"play_circle",
            title:"지금 듣기"
        }, {
            icon:"view_cozy",
            title:"재생 목록"
        }

    ]

    return <div className="container-navleft">
        <div className="navleft-top">
            <div className="navleft-contents">
                <span className="navleft-title">Music</span>
            </div>
            <div className="navleft-contents">
                <div className="navleft-search">
                <span className="material-symbols-outlined" id="search-icon">search</span>
                <input className="navleft-search-input"/>
                </div>
            </div>
            <div className="navleft-contents contentsbox">
                
                    {list_arr.map((item,index)=>(
                        <div key={index} className="navleft-mycontents">
                        <span className="material-symbols-outlined mycontents-icon">{item.icon}</span>
                            <span>{item.title}</span>
                        </div>
                    ))}
            </div>
        </div>
        <div className="navleft-top" style={{border:0,paddingTop:1}}>
        <div className="navleft-contents contentsbox">
                    <div className="navleft-mycontents" onClick={toggleMode}>
                    <span className="material-symbols-outlined mycontents-icon">{mode.g_icon}</span>
                        <span>{mode.g_icon_text}</span>
                    </div>
        </div>
        </div>
    </div>
}