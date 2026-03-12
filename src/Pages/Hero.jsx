import "../Styles/Hero.css"
import { use } from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const slides = [
"/Cat.jpg",
'/ZombieMenu.jpg',
'/kaneki.jpg'
];

function Hero(){
    const navigate = useNavigate();
    const [current, setCurrent] = useState(1);

    const nextSlide = () => {
        setCurrent((prev) => (prev +1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev -1 + slides.length) % slides.length);
    };

    return(
        <>
        <section id="home" className="section hero">
            {/*TEXT*/ }
            <div className="hero-visual">
            <div className="hero-content">
            <h2 className="hero-title">
                Abhi-Shake</h2>
            <p className="hero-subtitle">
                Independent Game Developer | Full Stack (In Progress)</p>
            </div>

            {/*SLIDER*/}
            <div className="hero-slider">
                <div className="slider-tracker"
                style={{transform: `translateX(-${current * 60}%)`}}>
                    {slides.map((src,index) =>(
                        <div className={`slide ${index === current ? "active" : ""}`}  key={index}>
                            <img src={src} alt="Hero-Slide" />
                        </div>
                    )
                )}
                </div>
            </div>
            </div>

            {/*CONTROLS*/}
            <div className="slider-controls">
                <button onClick={prevSlide}>‹</button>
                <button onClick={nextSlide}>›</button>
            </div>

            {/*CTA*/}
            <div className="hero-cta">
                <div className="hero-button">
                <button className="primary-btn"
                onClick={() => navigate("/projects")}>View Projects</button>
                <button className="secondary-btn"
                onClick={() => navigate("about")}>About Me</button>
                </div>
                <p className="hero-tagline">
                    I build interactive worlds, not just websites.
                </p>
            </div>
            <div className="hero-stack">
                <span>Unity</span>
                <span>C#</span>
                <span>Game Design</span>
                <span>Blender</span>
                <span>React</span>
            </div>

        </section>
        </>
    );
}

export default Hero;