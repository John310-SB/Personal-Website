import React from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "../styles/home.css"

function Home() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className='container'>
            <div className='commandPrompt'>
                <div className='commandTop noSelect'>John Isozaki - Software Engineer</div>
                <div className='commandBottom'>
                    <div className='typed-out noSelect'>Hi! Thank you for visiting my personal website.</div>
                    <div className='typed-out2 noSelect'>I am a software engineer specializing in frontend development.</div>
                    <div className='typed-out3 noSelect'>I have been working as a software engineer for over 3 years.</div>
                    <br className='noSelect'></br> 
                    <div className='typed-out4 noSelect'>What am I looking for in my next role?</div>
                    <div className='typed-out5 noSelect'>I am looking for a remote frontend engineering position.</div>
                    <div className='typed-out6 noSelect'>I am seeking a position where I can make a large impact on the team and</div>
                    <div className='typed-out7 noSelect'>build products that many users can benefit from and enjoy.</div>
                </div>
            </div>

            <button className='resumeButton' onClick={()=>{window.open('https://drive.google.com/file/d/1TCKaer7pfVThRXco5uPYJS3zk15GcRg5/view?usp=sharing')}}>CV/RESUME</button>
            <button className='linkedInButton' onClick={()=>{window.open('https://www.linkedin.com/in/john-isozaki-1b528524a/')}}>Linkedin</button>

            <div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#000000",
                            },
                        },
                        fpsLimit: 40,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 50,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#043ffc",
                            },
                            links: {
                                color: "#09c5ff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 50,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </div>

    );
};

export default Home;  