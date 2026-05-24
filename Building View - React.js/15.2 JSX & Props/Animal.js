// JSX Props

const Owner = (props) => {
    return (
        <h3> My name is: {props.ownerName}</h3>
    )
}

const Animal = (props) => {
    return (
        <ul>
            <li> Emoji: {props.emoji} </li>
            <li> Dog Name: {props.name} </li>
            <li> Species: {props.species} </li>
            <li> Is Cute: { props.isCute ? '✅ ': '❌' } </li>
        </ul>
    )
}