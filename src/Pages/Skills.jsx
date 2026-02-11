import "../Styles/Skills.css"

function Skills(){

    return(
        <>
        <section id="skills" className="section skills">
            <h2 className="skills-title">Skills</h2>

            <div className="skill-grid">
                <div className="skill-card">
                    <h3>Gameplay</h3>
                    <ul>
                        <li>Game Mechanics Design</li>
                        <li>Player Experience (UX)</li>
                        <li>Physics & Interaction</li>
                        <li>Enemy & Combat System</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h3>Programming</h3>
                    <ul>
                        <li>C# (Unity)</li>
                        <li>JavaScript (React)</li>
                        <li>Python (OOP)</li>
                        <li>Game logic & System</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h3>Design</h3>
                    <ul>
                        <li>UX / UI Design</li>
                        <li>Game Menu & HUD</li>
                        <li>Prototyping</li>
                        <li>Visual Polish</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}

export default Skills;