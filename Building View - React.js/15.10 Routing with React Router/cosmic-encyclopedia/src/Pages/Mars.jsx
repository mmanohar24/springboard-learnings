import "../CSS/Mars.css"

function Mars() {
    return (
        <div className="Mars">
            <h2> This is Mars</h2>

            <p>
                Mars is the fourth planet from the Sun. It is also known as the "Red Planet", for its orange-red appearance.
                Mars retains some water, in the ground as well as thinly in the atmosphere, forming cirrus clouds, fog, frost, larger polar regions of permafrost and ice caps (with seasonal CO2 snow), but no bodies of liquid surface water.
                Its surface gravity is roughly a third of Earth's or double that of the Moon.
                Its diameter, 6,779 km (4,212 mi), is about half the Earth's, or twice the Moon's, and its surface area is the size of all the dry land of Earth.
            </p>

            <div className="Mars-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png" />
            </div>

        </div>
    )
}

export default Mars;