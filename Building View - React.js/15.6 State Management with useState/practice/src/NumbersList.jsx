import { useState } from "react";
import NumberItem from "./NumberItem";

function NumbersList() {
    const [numbers, setNumbers] = useState([2, 4, 6, 8, 10]);

    const removeNumber = (num) => {
        setNumbers(numbers.filter(n => n !== num))
    }

    return (
        <div>
            <ul>
                {
                    numbers.map(number => (

                        <NumberItem
                            key={number}
                            number={number}
                            remove={removeNumber}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default NumbersList