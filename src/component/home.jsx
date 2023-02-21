//React & React Routing Imports
import React from 'react';
import { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
//Particle JS Imports
import Particles from "react-particles";
import { loadFull } from "tsparticles";
//Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { setTrue } from '../redux/tour'
//Style Imports
import "../styles/home.css"

function Home() {
    //Redux: dispatch allows use of setTrue and useSelector allows reading of redux state
    const { value } = useSelector((state) => state.tour)
    const dispatch = useDispatch();
    //useNavigate allows us to redirect
    const navigate = useNavigate();

    //function starts guided tour
    const checkTour = (bool) => {
        if (bool === true) {
            dispatch(setTrue());
            setTimeout(() => { navigate('/about', { replace: true }) }, 2000);
        }
        return;
    }

    //Particle JS Implementation
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        
        <div className='container'>
            <div className='commandPrompt'>
                <div className='commandTop'>John Isozaki - Software Engineer</div>
                <div className='commandBottom'>
                    <div className='typed-out'>Hi! Thank you for visiting my personal website.</div>
                    <div className='typed-out2'>I am a software engineer specializing in frontend development.</div>
                    <div className='typed-out3'>I have been working as a software engineer for over 3 years.</div>
                    <br></br>
                    <div className='typed-out4'>What am I looking for in my next role?</div>
                    <div className='typed-out5'>I am looking for a remote frontend engineering position.</div>
                    <div className='typed-out6'>Click "Take Tour" button to take a guided tour of my</div>
                    <div className='typed-out7'>website. Thank you for visiting. </div>
                </div>
            </div>
            <div className='buttonContainer'>
                <div className='buttonSpacing'>
                    <button className='resumeButton noSelect' onClick={() => { window.open('https://drive.google.com/file/d/1TCKaer7pfVThRXco5uPYJS3zk15GcRg5/view?usp=sharing') }}>CV/RESUME</button>
                    <button className='linkedInButton noSelect' onClick={() => { window.open('https://www.linkedin.com/in/john-isozaki-1b528524a/') }}>Linkedin</button>
                </div>
                <div className='buttonSpacing'>
                    <button className='tourButton noSelect' onClick={() => { console.log(value); checkTour(true) }}>Take Tour</button>
                    <button className='gitHubButton noSelect' onClick={() => { window.open("https://github.com/John310-SB") }}>Github</button>
                </div>
            </div>
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