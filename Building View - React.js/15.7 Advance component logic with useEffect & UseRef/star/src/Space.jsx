import { useEffect, useRef, useState } from "react";
import Star from "./Star";

function Space() {

    const [stars, setStars] = useState([])
    const starId = useRef();

    useEffect(
        () => {
            starId.current = setInterval(
                () => {
                    setStars(prevStars => [...prevStars, {
                        id: crypto.randomUUID(),
                        x: (window.innerWidth - 50) * Math.random(),
                        y: (window.innerHeight - 50) * Math.random()
                    }])
                }, 2500
            )
            return () => {
                clearInterval(starId.current);
            }

        }, []
    )

    function destroyStar(id) {
        setStars(prevStars => {
            return prevStars.filter((star) => star.id !== id)
        }
        )
    }

    return (
        <div>

            {
                stars.map(
                    (star) => (
                        <Star
                            key={star.id}
                            id={star.id}
                            x={star.x}
                            y={star.y}
                            destroyStar={destroyStar}
                        />
                    )
                )
            }
        </div>
    )
}

export default Space;