import Header from "../component/header"
import { Outlet } from "react-router-dom"

function Layout() {
 

    return (
      <>
        <Header/>
        <Outlet/>
      </>
    )
  }
  
  export default Layout