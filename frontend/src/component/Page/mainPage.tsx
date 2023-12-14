import { Main } from "../main/main"
import "./mainPage.css"
import { MusicContents } from "../main/mainContents/musiccontents/musicContents"
import imgDTO from "../main/mainContents/musiccontents/imgJSONfolder/imgjson.json"
import imgDTO2 from "../main/mainContents/musiccontents/imgJSONfolder/imgjson2.json"

export const MainPage:React.FC = ()=>{
    return <Main>
        <MusicContents title={"에디터도 듣는중"} contentsArr={imgDTO.data}/>
        <MusicContents title={"오늘의 추천목록"} contentsArr={imgDTO2.data}/>
    </Main>
}