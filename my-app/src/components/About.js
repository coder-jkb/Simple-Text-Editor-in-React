import React from 'react'

export default function About(props) {
    return (
        <div className={"container text-"+props.mode} >
            <h1 className="about">About</h1>
            <p>
            &rarr; I am <strong>Jay Bhanushali</strong> and I have built this simple text utility application as a project while learning <strong><a href="https://reactjs.org" style={{color:"#35c7ff"}}><img src="logo192.png" alt="React_logo" style={{height:"30px"}} />React</a></strong>. It's my first react app :D
            </p>
            <p>
            &rarr; As the main focus was te learn React, I have used Bootstrap for basic layought and styling...
            </p>
            <h3>What did I learn from this Project ?</h3>
            <ul>
                <li>Getting started with React - Creating simple react app</li>
                <li>Function based components</li>
                <li>Learn props and useState</li>
                <li>React router</li>
            </ul>
            <h3>Resources</h3>
            <p>
            <strong>&rarr;<a href="https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" target="_blank" rel="noreferrer" style={{color:"#ff7c7c", textDecoration:"none"}}> Youtube tutorial by CodeWithHarry</a></strong>
            </p>
            <p>
            <strong>&rarr;<a href="https://reactjs.org/docs/getting-started.html" style={{color:"#35c7ff", textDecoration:"none"}}> React official documentation</a></strong>
            </p>
            You can have a look at the source code by visiting this GitHub repo<a href="https://git.io/Jutb8" target="_blank" rel="noreferrer" style={{color:"#00d500"}}> <strong>Simple-Text-Editor-in-React</strong></a> & any suggestion or feedback related to the project is heartily welcomed.
        </div>
    )
}
