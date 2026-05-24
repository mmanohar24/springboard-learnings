function PokeCard({ name, type, base_experience, image }) {
    return (
        <div className="PokeCard">
            <h3> {name} </h3>
            <img src={image} alt = {name}/>
            <p>
                Type: {type} <br />
                Exp: {base_experience}
            </p>
        </div>
    )
}