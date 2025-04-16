import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./footer"


const Layout = () => {
  return (
    <div>
        {/* Header */}
        <Header/>

        {/* Chikdren components */}
        <Outlet/>

        
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Layout;