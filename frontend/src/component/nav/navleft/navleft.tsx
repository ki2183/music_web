import "./navleft.css"

interface ListProps{
    icon:string,
    title:string 
}

export const Navleft:React.FC = ()=>{

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
                {/* 
                <div className="navleft-mycontents">
                <span className="material-symbols-outlined mycontents-icon">play_circle</span>
                    <span>지금 듣기</span>
                </div>
                <div className="navleft-mycontents">
                <span className="material-symbols-outlined mycontents-icon">view_cozy</span>
                    <span>재생 목록</span>
                </div> */}
            </div>
        </div>
    </div>
}