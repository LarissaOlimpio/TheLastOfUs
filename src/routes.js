import BasePage from "pages/BasePage"
import Contact from "pages/Contact"
import NotFound from "pages/NotFound"
import Start from "pages/Start"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes(){
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage/>}>
                    <Route index element={<Start/>}></Route>
                    <Route path="contato" element={<Contact/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes