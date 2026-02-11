import '../Styles/Footer.css'

function Footer(){

    return(
        <footer className='footer'>
            <div className="footer-content">
                <p className='footer-name'>
                     © {new Date().getFullYear()} Abhi-Shake
                </p>
                <p className='footer-tagline'>
                    Independent Game Developer . Building Interactive Worlds
                </p>
                <div className="footer-links">
                    <a href="https://github.com/Xiao-Yan19" target='_blank'>GitHub</a>
                    <a href="https://www.linkedin.com/in/abhishek-kumar-sharma-963345363/" target='_blank'>LinkedIn</a>
                    <a href="mailto:sharmaabhikumar1234@gmail.com" target='_blank'>Email</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;