import { Outlet } from "react-router";

function Home() {
  
  return (
    <>
      <h1>cabeçalho</h1>
      <Outlet/>
      <h1>rodape</h1>
    </>
  )
}

export default Home
