import { Main } from "../main/main"
import "./mainPage.css"
import { RecommendContents } from "../main/mainContents/recommendContents"

export const MainPage:React.FC = ()=>{
    return <Main>
        <RecommendContents/>
    </Main>
}