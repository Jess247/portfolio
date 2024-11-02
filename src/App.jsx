import Header from "./components/Header"
import About from "./components/About"
import Card from "./components/Card"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const projects = [
      {
        id: 0,
        name: "React Quiz",
        img: "https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
        altText: "Project thumbnail.",
        description: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        code: "https://github.com",
        url: "https:gorgeous-horse-d3973b.netlify.app/",
        skills: ["HTML5", "SASS/CSS","JavaScript", "React", "API"]
      },
      {
        id: 1,
        name: "Chrome extension",
        img: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
        altText: "Project thumbnail.",
        description: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        code: "https://github.com",
        url: "https:gorgeous-horse-d3973b.netlify.app/",
        skills: ["HTML5", "CSS","JavaScript"]
      },
      {
        id: 2,
        name: "Gif Generator",
        img: "https://images.unsplash.com/photo-1602265568624-29e8dc535bd6?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
        altText: "Project thumbnail.",
        description: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        code: "https://github.com",
        url: "https:gorgeous-horse-d3973b.netlify.app/",
        skills: ["HTML5", "SASS/CSS","JavaScript", "React", "API"]
      },
    ]

  return (
    <div className="text-white p-8 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_55%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Header/>
      <About/>
      <div className="my-16">
        <h3 className="text-xl uppercase font-semibold tracking-wider">Projects</h3>
        {projects.map(project => <Card key={project.id} name={project.name} description={project.description} imgSrc={project.img} altText={project.altText} code={project.code} url={project.url} skills={project.skills}/>)}
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
