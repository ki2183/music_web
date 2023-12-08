import { useRef } from 'react'
import './navtop.css'

export const NavTop:React.FC = ()=>{

    const spanRef = useRef<HTMLSpanElement>(null)



    return <div className='container-nav-top'>
        <div className='null-nav'/>
        <div className='main-nav-top'>
        <div className="pink blush" />
          <div className="blue blush" />
            <div className='login-button'>
                <span ref={spanRef}>로그인</span>
            </div>
        </div>
    </div>
}