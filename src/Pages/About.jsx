import "../Styles/About.css"

function About(){

    return(
        <>
        <section id="about" className="section about">
         <div className="about-container">
          <h2>About Me</h2>
            <p className="about-tagline">
            I build interactive worlds, not just websites.
            </p>
            <p>
              I’m an independent game developer with a strong focus on creating immersive worlds and meaningful gameplay experiences.<br />
              I enjoy working at the intersection of design and development, blending creativity with logic to bring ideas to life.<br/>
              From gameplay mechanics to interactive UI, I’m constantly learning and experimenting with new tools and technologies to grow as a full-stack game developer.
            </p>
            <div className="about-focus">
            <div>
              <h4>Gameplay</h4>
              <p>Mechanics, systems, and player experience</p>
            </div>
            <div>
              <h4>Development</h4>
              <p>Unity, React, logic-driven solutions</p>
            </div>
            <div>
              <h4>Design</h4>
              <p>UI/UX with a cinematic mindset</p>
            </div>
          </div> 
             <div className="about-tags">
            <span>🎮 Game Design</span>
            <span>🧠 Systems Thinking</span>
            <span>🛠 Unity / React</span>
            <span>🔥 Always Learning</span>
            </div>
            </div>  
           <div className="about-img">
            <img src="/public/abhi.png" alt="AboutMe Image" />
           </div>
          </section>
        </>
    );
}

export default About;