import { useEffect, useRef, useState } from "react";
import gifVideo from "./assets/gif.mp4";

function Video({
    src = gifVideo
    // src = "https://media.giphy.com/media/KctGIT2J2JHvVRC7ESeR/giphy.mp4"
}) {

    const [speed, setSpeed] = useState(1);
    const videoRef = useRef();

    useEffect(() => {
        videoRef.current.playbackRate = speed
    }, [speed])

    return (
        <div>

            <video muted autoPlay loop ref={videoRef}>
                <source src={src} />
            </video>

            <div>
                <button onClick={() => setSpeed(s => s / 2)}>
                    Slow
                </button>

                <button onClick={() => setSpeed(s => s * 2)} >
                    Fast
                </button>

                <span> Current Speed: {speed}x </span>
            </div>

        </div>
    )
}

export default Video;