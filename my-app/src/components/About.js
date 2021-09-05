import React from 'react'

export default function About(props) {
    return (
        <div className={"container text-"+props.mode} >
            <h1 className="about">About Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempora omnis officiis consectetur velit accusantium aspernatur odit, dolorum libero perspiciatis optio reiciendis corporis sequi quas nobis rerum similique, architecto vitae ullam facilis ex iusto atque.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempora omnis officiis consectetur velit accusa aspernatur odit, dolorum libero perspiciatis optio reiciendis corporis sequi quas nobis rerum similique, architecto vitae ullam facilis ex iusto atque.</p>
        </div>
    )
}
