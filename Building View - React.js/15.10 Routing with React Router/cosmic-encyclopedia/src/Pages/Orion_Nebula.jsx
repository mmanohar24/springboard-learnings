import "../CSS/OrionNebula.css"

function OrionNebula() {
    return (
        <div className="OrionNebula">
            <h2> This is OrionNebula</h2>

            <p>
                The Orion Nebula (Messier 42 or M42) is a massive, glowing stellar nursery located roughly 1,500 light-years from Earth in the Milky Way. As the closest large region of active star formation to us, it spans about 24 light-years across and is famously visible to the naked eye as a fuzzy patch in Orion's sword.
            </p>

            <div className="OrionNebula-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/330px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg" />
            </div>

        </div>
    )
}

export default OrionNebula;