import { useEffect, useState } from "react";
import "./Practise.css"

function Practice() {

    const [input, setInput] = useState("");
    const [user, setUser] = useState(
        {
            name: "Alex",
            email: "user@example.com",
            images: []
        }
    );

    const changeUsername = () => {
        setUser((prev) => ({ ...prev, name: input }))
    }

    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(count * 2);

    console.log('Single Counter', count);
    console.log('Double Counter:', doubleCount);

    const handleClick = () => {
        setCount(count + 1); // 0 + 1 = 1
    }

    useEffect(() => {
        setDoubleCount(count + 2);
    }, [count]);

    // const [search, setSearch] = useState("");
    // const [results, setResults] = useState([]);

    // useEffect(() => {
    //     fetch(`/search?${search}`)
    //         .then(response => response.json())
    //         .then(setResults);
    // }, [search]);

    // const onChange = (event) => {
    //     setSearch(event.target.value);
    // }

    return (
        <div className="Practice">

            <h2> Counter 1 : {count} </h2>
            <h2> Double Counter: {doubleCount} </h2>

            <button onClick={handleClick}> Increase Counter </button>

            <h3> User </h3>
            <input
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Username">
            </input>

            <button
                className="Practice-changeUsername-btn"
                onClick={changeUsername}
            > Change UserName </button>

            <span> Username is: {user.name} </span>

            {/* <input value={search} onChange={onChange} />
            {
                results.map(result => {
                    { result }
                })
            } */}


        </div>
    )
}

export default Practice;


