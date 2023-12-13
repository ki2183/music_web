import { Main } from "../main/main"
import "./mainPage.css"
import { MusicContents } from "../main/mainContents/musiccontents/musicContents"

export const MainPage:React.FC = ()=>{
    return <Main>
        <MusicContents/>
    </Main>
}