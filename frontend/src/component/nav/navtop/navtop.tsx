import { useRef } from 'react'
import './navtop.css'

export const NavTop:React.FC = ()=>{

    const spanRef = useRef<HTMLSpanElement>(null)



    return <div className='container-nav-top'>
        <div className='main-nav-top'>
            <div className='login-button'>
                <span ref={spanRef}>로그인</span>
            </div>
        </div>
    </div>
}