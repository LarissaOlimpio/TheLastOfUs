import Footer from "components/Footer"
import Header from "components/Header"
import { Outlet } from "react-router-dom"


function BasePage(){
    return(
       <main>
           <Header/>
                <Outlet/>
           <Footer/>
       </main>
    )
}
export default BasePage