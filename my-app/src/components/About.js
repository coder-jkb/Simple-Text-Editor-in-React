import React from 'react'

export default function About(props) {
    return (
        <div className={"container text-"+props.mode} >
            <h1 className="about">About</h1>
            I am <strong>Jay Bhanushali</strong> I have built this simple text utility application as a project while learning react from <a href="https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" target="_blank" rel="noreferrer"><strong>this</strong></a> youtube tutorial by <a href="https://www.youtube.com/c/CodeWithHarry" target="_blank" rel="noreferrer"><strong>CodeWithHarry</strong></a>
            I like to do web developement especially backend. I am also learning Machine Learning...
            I know bacis of C/C++, Python, HTML/CSS/JS and currently learning react :D. A pull request for any improvement in thhis project is welcomed. You can have a look at the repo by visiting <a href="https://git.io/Jutb8" target="_blank" rel="noreferrer"> here Simple-Text-Editor-in-React</a>
        </div>
    )
}
