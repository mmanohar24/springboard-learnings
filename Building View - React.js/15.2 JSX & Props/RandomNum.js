const RandomNum = () => {

    const number = Math.floor(Math.random() * 20 ) + 1;
    // return <h3> {number} </h3>
    return React.createElement('h3', null, number);
}