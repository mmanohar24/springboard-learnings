const RandomChoices = (props) => {

    const idx = Math.floor(Math.random() * props.choices.length);
    const randomColor = props.choices[idx];

    return (
        <>
            <h3> Random Color: {randomColor} </h3>
        </>
    )
}