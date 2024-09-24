import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
// import { Home } from "./Pages/Home"
import {  useSelector } from 'react-redux';
import {Footer} from './Components/Footer'



export default function AppLayout(){
   
  
    const name=useSelector((state)=>state.user.userName)
    console.log(name)

    return(
        <>
        <Header />
        <Outlet />
        
        <Footer />
        </>
    )
}