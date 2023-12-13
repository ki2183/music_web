import './musicContents.css'
import img1 from './imgfolder/KerningCity.png'

export const MusicContents:React.FC = ()=>{
    return <div className='container-music-content'>
        <span className='music-content-title'>추천 음악 ›</span>
        <div className='frame-music-content-div'>
            <ul className='frame-music-content-ul'>
                <li className='music-contents-li'>
                    <div className='contents-img' style={{backgroundImage:`url(${img1})` }}>

                    </div>
                    <div className='contents-img-title'>
                        <span>커닝시티</span>
                        <span>메이플</span>
                    </div>
                </li>

                <li className='music-contents-li'>
                    <div className='contents-img' style={{backgroundImage:`url(${img1})` }}>

                    </div>
                    <div className='contents-img-title'>
                        <span>커닝시티</span>
                        <span>메이플</span>
                    </div>
                </li>

                <li className='music-contents-li'>
                    <div className='contents-img' style={{backgroundImage:`url(${img1})` }}>

                    </div>
                    <div className='contents-img-title'>
                        <span>커닝시티</span>
                        <span>메이플</span>
                    </div>
                </li>

                <li className='music-contents-li'>
                    <div className='contents-img' style={{backgroundImage:`url(${img1})` }}>

                    </div>
                    <div className='contents-img-title'>
                        <span>커닝시티</span>
                        <span>메이플</span>
                    </div>
                </li>

                <li className='music-contents-li'>
                    <div className='contents-img' style={{backgroundImage:`url(${img1})` }}>

                    </div>
                    <div className='contents-img-title'>
                        <span>커닝시티</span>
                        <span>메이플</span>
                    </div>
                </li>

                <li className='music-contents-li'>
                    <div className='contents-img' style={{backgroundImage:`url(${img1})` }}>

                    </div>
                    <div className='contents-img-title'>
                        <span>커닝시티</span>
                        <span>메이플</span>
                    </div>
                </li>

                <li className='music-contents-li'>
                    <div className='contents-img' style={{backgroundImage:`url(${img1})` }}>

                    </div>
                    <div className='contents-img-title'>
                        <span>커닝시티</span>
                        <span>메이플</span>
                    </div>
                </li>


            </ul>
        </div>
    </div>
}
