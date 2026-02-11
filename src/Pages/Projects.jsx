import "../Styles/Projects.css"
import Zombie from "/public/ZombieMenu.jpg"

const projects = [
    {
        title:"ZOMBIE_Shooting",
        desc:"Physics-based FPS prototype with destructible objects and Zombie Shooting",
        img:Zombie,
        tech:"Unity . C# . Physics",
    },
    {
        title:"KARMA",
        desc:"Story-driven hack & slash game based on karmic justice and elemental powers.",
        img:"",
        tech:"Unity . C# . Game Design",
    },
    {
        title:"KARMA",
        desc:"Story-driven hack & slash game based on karmic justice and elemental powers.",
        img:"",
        tech:"Unity . C# . Game Design",
    },

];


function Projects(){

    return(
        <>
        <section id="projects" className="section projects">
            <h2 className="project-title">Projects</h2>

            <div className="project-grid">
                {projects.map((projects,index) => (
                <div className="project-card" key={index}>
                    <img src={projects.img} alt="Game-Img" />
                    <div className="project-content">
                        <h3>{projects.title}</h3>
                        <p>{projects.desc}</p>
                        <span>{projects.tech}</span>
                    </div>
                </div>
                ))}
            </div>
        </section>
        </>
    );
}

export default Projects;