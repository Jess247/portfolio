import Header from "./components/Header"
import About from "./components/About"
import Card from "./components/Card"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="text-white p-8 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Header/>
      <About/>
      <div className="my-16">
        <h3 className="text-xl uppercase font-semibold tracking-wider">Projects</h3>
        <Card
          imgSrc="https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
          altText="Project thumbnail."
          />
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
