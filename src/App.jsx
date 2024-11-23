import Header from "./components/Header"
import About from "./components/About"
import Card from "./components/Card"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import gif from "./assets/imgs/gif.png"
import quiz from "./assets/imgs/quiz.png"
import movie from "./assets/imgs/movie.png"

function App() {

  const projects = [
      {
        id: 0,
        name: "React Quiz",
        img: `${quiz}`,
        altText: "Project thumbnail.",
        description: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        code: "https://github.com",
        url: "https:gorgeous-horse-d3973b.netlify.app/",
        skills: ["HTML5", "SASS/CSS","JavaScript", "React", "API"]
      },
      {
        id: 1,
        name: "Movie List",
        img: `${movie}`,
        altText: "Project thumbnail.",
        description: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        code: "https://github.com",
        url: "https:gorgeous-horse-d3973b.netlify.app/",
        skills: ["HTML5", "CSS","JavaScript"]
      },
      {
        id: 2,
        name: "Gif Generator",
        img: `${gif}`,
        altText: "Project thumbnail.",
        description: "lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        code: "https://github.com",
        url: "https://gorgeous-horse-d3973b.netlify.app/",
        skills: ["HTML5", "SASS/CSS","JavaScript", "API"]
      },
    ]

  return (
    <div className="text-white p-8 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_55%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div class="lg:flex">
        <div className="lg:h-screen lg:top-0 md:left-0 lg:w-[800px] lg:sticky lg:pt-24">
          <Header/>
        </div>
        <div className="lg:my-8">
          <About/>
          <div className="my-16">
            <h3 className="text-xl uppercase font-semibold tracking-wider">Projects</h3>
            {projects.map(project => <Card key={project.id} name={project.name} description={project.description} imgSrc={project.img} altText={project.altText} code={project.code} url={project.url} skills={project.skills}/>)}
          </div>
          <Contact/>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default App
