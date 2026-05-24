// React Props.children

const Title = (props) => {
    return (
        <main>
            <h1> {props.title} </h1>
            {props.children}
        </main>
    )
}

const Description = (props) => {
    return (
        <p>
            {props.text}
        </p>
    )
}