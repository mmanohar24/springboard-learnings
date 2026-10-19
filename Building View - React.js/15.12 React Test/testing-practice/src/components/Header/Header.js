import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (

        <div>
            <h1 className="header">{title}</h1>

            <h3 title="Header" 
            data-testid = "header2"
            className="header"> Cats </h3>
        </div>
    )
}
