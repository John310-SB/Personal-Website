import React from 'react';
import '../styles/about.css'
import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import android from '../assets/androidstudio.png';
import angular from '../assets/angular.png';
import css from '../assets/css.png';
import git from '../assets/git.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import ts from '../assets/ts.png';
import vs from '../assets/vs.png';
import vsCode from '../assets/vscode.png';
import vue from '../assets/vue.png';
import xd from '../assets/xd.png';
import surf from '../assets/surf.png';
import travel from '../assets/travel.png';
import golf from '../assets/golf.png';

function About() {
    let answer1 =
        <div>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot  color='success'/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='TimelineContent'>I grew up in Hermosa Beach, California.</div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot  color='success' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='TimelineContent'>Attended Mira Costa Highschool.</div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot  color='success' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='TimelineContent'>Joined the Electrical Union for Commercial Electrical.</div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot  color='success' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='TimelineContent'>Started a business called Card Realm LLC, a trading card marketplace. </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot  color='success' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='TimelineContent'>Built and Launched Card Realm Marketplace to the Play Store and App Store.</div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot  color='success' />
                    </TimelineSeparator>
                    <TimelineContent>
                    <div className='TimelineContent'>Joined Formation fellowship to solidify software engineering fundamentals. </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            <div className="opportunities">Currently searching for new opportunities</div>
        </div>
    let answer2 = 
    <div className='answer2'>
        &nbsp; &nbsp; &nbsp; &nbsp; Out of highschool I knew that I wanted to become an electrician.  
        I pursued a career in commercial electrical and learned as much as I could, everyday putting the hard hours of work to perfect my craft.
        After 4 years I started to notice certain trends in the construction industry.  The most impactful trend I noticed was that the
        goal to take the engineering part of electrical work out of the electricians hands.  When I started we had to do
        load calculations and design systems that could handle the output needed.  When I left I felt more of an installer than an electrician, much of the
        thought was taken out of the work, and problem solving was no longer an attribute needed in the electrical trade.  <br></br><br></br>
        &nbsp; &nbsp; &nbsp; &nbsp; I made a career change in 2019 to software engineering, When
        I had an idea for a mobile marketplace for collectible trading cards.  I spent 3 years developing and updating the front end, and was fortunate enough to be mentored 
        from a principal software engineer. This was the start of my software journey, and then I continued on to the Formation fellowship to solidify my
        fundamentals as a software engineer.  I was able to collaborate with countless developers and learn from mentors from top rated companies.  
        <br></br><br></br>
        &nbsp; &nbsp; &nbsp; &nbsp; The reason I enjoy software engineering is not only because I love to see products being built.  The reason I am 
        a software engineer is because as an engineer you are facing new obstacles frequently and you are not going to solve the 
        same problem over and over again.  The job of a software engineer is not to solve problems that have been solved before, but to
        solve problems that haven't been solved and to create a better product than the existing one. 
    </div>

    let answer3 = 
        <div className='answer3Container'>
            <div className='skillTitles'>Frameworks</div>
                <div className='skillContainers'>
                    <div className='imageText'>
                        <img className='skillIcon' src={react} alt="css" />
                        <div className='iconText'>React</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={react} alt="css" />
                        <div className='iconText'>React Native</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={vue} alt="css" />
                        <div className='iconText'>Vue</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={angular} alt="css" />
                        <div className='iconText'>Angular</div>
                    </div>
                </div>
            <div className='skillTitles'>Languages</div>
                <div className='skillContainers'>
                    <div className='imageText'>
                        <img className='skillIcon' src={js} alt="css" />
                        <div className='iconText'>Javascript</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={ts} alt="css" />
                        <div className='iconText'>Typescript</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={html} alt="css" />
                        <div className='iconText'>HTML</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={css} alt="css" />
                        <div className='iconText'>CSS</div>
                    </div>
                </div>
            <div className='skillTitles'>Tools</div>
                <div className='skillContainers'>
                    <div className='imageText'>
                        <img className='skillIcon' src={redux} alt="css" />
                        <div className='iconText'>Redux</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={xd} alt="css" />
                        <div className='iconText'>XD</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={android} alt="css" />
                        <div className='iconText'>Android Studio</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={vs} alt="css" />
                        <div className='iconText'>Visual Studio</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={vsCode} alt="css" />
                        <div className='iconText'>Visual Studio Code</div>
                    </div>
                    <div className='imageText'>
                        <img className='skillIcon' src={git} alt="css" />
                        <div className='iconText'>Git</div>
                    </div>
                </div>
            </div>

    let answer4 = 
        <div>
            <div>
                <div className='answer4Title'>What is my greatest technical strength?</div>
                <div className='answer4'>I have found my greatest technical strength is the ability to learn new technologies, and 
                apply them practically to a project.  While I consider this to be my greatest strength, the way I have 
                developed this skill is by learning how to read documentation and being able to research these technologies using
                resources such as medium, youtube, official documentation, and stackOverflow.
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <div className='answer4Title'>What is my greatest non-technical strength?</div>
                <div className='answer4'>My greatest non-technical strength is my ability to overcome obstacles.  I gained this skill by
                    facing many obstacles, and finding a fitting solution to each obstacle.  While this may be a non-technical skill, It has
                    transformed the way I work, and how I live my life.  Every obstacle I have faced as a software engineer, some taking minutes and some 
                    taking days, each problem requires a different angle of execution, and the goal of an engineer is to find the most optimal solution.    
                </div>
            </div>
        </div>

    let answer5 = 
        <div className='hobbyContainer'>
            <div className='hobbyRow'>
                <img className='hobbyImage' src={surf} alt='surf'/>
                <div className='hobbyDescription'>
                    <div className='hobbyTitles'>Picture Insight</div>
                    <div className='hobbyInfo'>2019 Surf Trip - Shot taken at Uluwatu surf spot</div>
                    <div className='hobbyTitles'>Favorite Surf Spots</div>
                    <div className='hobbyInfo'>Hermosa Beach - 24th St <br></br>
                    Bali - Airport Right's
                    </div>
                    <div className='hobbyTitles'>Favorite Board</div>
                    <div className='hobbyInfo'>Lost: 5' 10" Driver Green</div>
                </div>
            </div>
            <div className='hobbyRow'>
                <img className='hobbyImage' src={golf} alt="golf"/>
                <div className='hobbyDescription'>
                    <div className='hobbyTitles'>Picture Insight</div>
                    <div className='hobbyInfo'>2020 - Boston, Hidden Hills Golf Club</div>
                    <div className='hobbyTitles'>Favorite Course</div>
                    <div className='hobbyInfo'>Long Beach - Sky Links <br></br>
                    Bakersfield - River Lakes Golf Club
                    </div>
                    <div className='hobbyTitles'>Current Handicap</div>
                    <div className='hobbyInfo'>9.8</div>
                </div>
            </div>
            <div className='hobbyRow'>
                <img className='hobbyImage' src={travel} alt="travel"/>
                <div className='hobbyDescription'>
                    <div className='hobbyTitles'>Picture Insight</div>
                    <div className='hobbyInfo'>2019 - Tegalalang, Rice Fields</div>
                    <div className='hobbyTitles'>Favorite Destinations</div>
                    <div className='hobbyInfo'>Bali - Seminyak <br></br>
                    Japan - Osaka
                    </div>
                    <div className='hobbyTitles'>Places I've Been</div>
                    <div className='hobbyInfo'>16 US States, Japan, Thailand, Indonesia, Iceland, Spain and Germany</div>
                </div>
            </div>
        </div>

    const [answer, setAnswer] = useState(answer1)
    const [q1, setQ1] = useState("questionSelect borderRUght noSelect");
    const [q2, setQ2] = useState("question noSelect");
    const [q3, setQ3] = useState("question borderRight noSelect");
    const [q4, setQ4] = useState("question noSelect");
    const [q5, setQ5] = useState("question noSelect");

    const changeStyles = (element) => {
        if (element === 1) {
            setQ1("questionSelect borderRight noSelect");
            setQ2("question  noSelect")
            setQ3("question borderRight noSelect")
            setQ4("question noSelect")
            setQ5("question noSelect")
        }
        if (element === 2) {
            setQ1("question borderRight noSelect");
            setQ2("questionSelect noSelect")
            setQ3("question borderRight noSelect")
            setQ4("question noSelect")
            setQ5("question noSelect")
        }
        if (element === 3) {
            setQ1("question borderRight noSelect");
            setQ2("question noSelect")
            setQ3("questionSelect borderRight noSelect")
            setQ4("question noSelect")
            setQ5("question noSelect")
        }
        if (element === 4) {
            setQ1("question borderRight noSelect");
            setQ2("question noSelect")
            setQ3("question borderRight noSelect")
            setQ4("questionSelect noSelect")
            setQ5("question noSelect")
        }
        if (element === 5) {
            setQ1("question borderRight noSelect");
            setQ2("question noSelect")
            setQ3("question borderRight noSelect")
            setQ4("question noSelect")
            setQ5("questionSelect noSelect")
        }
        return
    }



    return (
        <div className='containers'>
            <div>
                <div className='qRows'>
                    <div className={q1} onClick={() => { setAnswer(answer1); changeStyles(1) }}>Who is John Isozaki?</div>
                    <div className={q2} onClick={() => {  setAnswer(answer2); changeStyles(2) }}>Why am I a software engineer?</div>
                </div>
                <div className='qRows'>
                    <div className={q3} onClick={() => { setAnswer(answer3); changeStyles(3) }}>What Technical skills do I have?</div>
                    <div className={q4} onClick={() => { setAnswer(answer4); changeStyles(4) }}>Greatest Strength?</div>
                </div>
                <div className={q5} onClick={() => { setAnswer(answer5); changeStyles(5) }}>What are my hobbies?</div>
            </div>
            <div className='answer'>{answer}</div>
        </div>
    )
}

export default About;  