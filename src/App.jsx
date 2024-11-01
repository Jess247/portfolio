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
      <Card/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
