//home.js
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home2 from "./Home2";
import { ToastContainer, toast } from 'react-toastify';
export default function Home()
{
    return(
        <>
        <Navbar></Navbar>
        <Home2></Home2>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
        </>
    )
}