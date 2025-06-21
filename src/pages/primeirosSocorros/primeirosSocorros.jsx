import React from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ChatZee from "../../components/chatZee/ChatZee";

const primeirosSocorros = () => {
  return (
    <>
      <Header />
      <ChatZee />
      <div className="container">
        <h1>Primeiros Socorros</h1>
        <p>Conteúdo sobre primeiros socorros será adicionado em breve.</p>
      </div>
      <Footer />
    </>
  )
}

export default primeirosSocorros