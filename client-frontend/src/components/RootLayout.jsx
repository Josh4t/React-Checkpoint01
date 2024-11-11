import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navigation from "./Navigation"


function Layout() {
  return (
    <div>
      <Navigation/>
     <main className='min-h-dvh px-5'>
      <Outlet/>
     </main>
     <Footer/>
    </div>
  )
}

export default Layout

