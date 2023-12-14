import './musicContents.css'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { contentsInterface } from '../../../../interface/musicContent'

export const MusicContents:React.FC<contentsInterface> = ({title,contentsArr})=>{

    const ulRef = useRef<HTMLUListElement>(null)
    const [ulNum,setUlNum] = useState<number>(0)
    const grid_size_default = 224 as number
    const grid_gap = 30 as number
    const imgNum = contentsArr.length as number
    const ullimit = imgNum-6

    const MoveUL = (n:number)=>{
        gsap.to(ulRef.current,{
            duration : 0.5,
            x : -n * (grid_gap+grid_size_default),
            ease: "power4.out",
        })
    }
    const ButtonLeft =()=>{
        if(ulNum > 0){
            setUlNum(ulNum-1)
        }
    }
    const ButtonRight =()=>{
        if(ulNum < ullimit){
            setUlNum(ulNum+1)
        }
    }

    useEffect(()=>{
        MoveUL(ulNum)
    },[ulNum])
    
    useEffect(()=>{
        console.log(contentsArr)
    },[])

    return <div className='container-music-content'>
        <span className='music-content-title'>{title} ›</span>
        <div className='frame-music-content-div'>
        <span 
        className="material-symbols-outlined music-content-next next-left"
        onClick={ButtonLeft}
        >
        arrow_forward_ios
        </span>
            <div className='frame-music-content-div-in'>
            <ul className='frame-music-content-ul' ref={ulRef}>

                {contentsArr.map((item, index) => (
                    <li className='music-contents-li' key={index}>
                    <div className='contents-img' style={{ backgroundImage: `url(${require(`${item.link}`)})` }}></div>
                    <div className='contents-img-title'>
                        <span>{item.title}</span>
                        <span>{item.editer}</span>
                    </div>
                    </li>
                ))}

            </ul>
            </div>
            <span 
            className="material-symbols-outlined music-content-next next-right"
            onClick={ButtonRight}
            >
        arrow_forward_ios
        </span>
        </div>
    </div>
}
