import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function Home() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Home
