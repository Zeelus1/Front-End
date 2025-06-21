import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ChatZee from "./components/chatZee/ChatZee";

function Home() {

  return (
    <>
      <Header/>
      <ChatZee/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Home
