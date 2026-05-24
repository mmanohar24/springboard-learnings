import { useState } from "react";
import { Navigate } from "react-router"

import "../About.css"

function About() {

    const [user, setUser] = useState('Alex');

    if (!user) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <div className="About">
            <h1> About </h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed non velit libero. Donec dolor arcu, mattis vel sapien non, porta efficitur felis.
                Donec tempus consequat lacinia. Mauris molestie elementum urna, eget rhoncus justo dignissim ut. Suspendisse potenti.
                Sed libero lorem, sagittis id arcu ullamcorper, mollis sollicitudin quam.
                Nunc at leo vel magna tincidunt dignissim non porta ipsum. Aenean est dolor, suscipit vitae dictum at, eleifend sit amet diam.
                Nulla facilisi. Integer ultricies bibendum sapien, quis viverra turpis imperdiet non.
            </p>

            <p>
                Vivamus dapibus sagittis leo, at tincidunt tellus molestie quis.
                Nam eu ipsum id diam mollis auctor. Donec molestie suscipit luctus.
                Nam non rhoncus nulla. Praesent eu efficitur eros. Suspendisse blandit scelerisque vehicula.
                Mauris urna sem, volutpat in tellus et, sollicitudin finibus mauris. Duis nec tempus ipsum.
                Nam justo ex, euismod eu ullamcorper non, ultricies eget sem. Mauris dignissim, erat non lobortis rutrum, leo mi facilisis justo, quis porta ex quam eget orci.
                Morbi non finibus quam. Cras a sollicitudin nibh. Nam imperdiet in tortor ac condimentum. Suspendisse potenti.
            </p>

            <button
                onClick={() => setUser(null)}
            > Log Out</button>
        </div>
    )
}

export default About;