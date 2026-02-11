import "../Styles/Contact.css"

function Contact(){

    return(
       <>
        <section id="contact" className="section contact">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-text">
                Have a project idea, game concept, or just want to talk about game dev?
                I'm always open to collaborations and new challenges.
            </p>
            <div className="contact-action">
                <a href="mailto:sharmaabhikumar1234@gmail.com"
                className="contact-btn primary glow">
                Email Me
                </a>
                <a href="https://github.com/Xiao-Yan19"
                className="contact-btn glow"
                target="_blank">
                GitHub
                </a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-sharma-963345363/"
                className="contact-btn glow"
                target="_blank">
                LinkedIn
                </a>
            </div>
        </section>
        </>
    );
}

export default Contact;