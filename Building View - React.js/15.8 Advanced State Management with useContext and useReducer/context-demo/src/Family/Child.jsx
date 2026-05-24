import { useContext, useState } from 'react';
import CountContext from './CountContext';
import ThemeContext from '../Context/ThemeContext';
import GrandChild from './GrandChild';
import './Child.css'

function Child() {

    const [count, setCount] = useState(0);
    const { color } = useContext(ThemeContext);

    const incrementCount = () => {
        setCount(count => count + 1)
    }

    const decrementCount = () => {
        setCount(count => count - 1);
    }

    return (
        <CountContext.Provider value={{ count, incrementCount, decrementCount }}>

            <div
                className='Child'
                style={
                    {
                        border: '4px solid blue',
                        margin: '1rem',
                        width: '500px',
                        borderRadius: '5px'
                    }
                }>
                <p
                    style={{ color }}
                > This is Child Component!! </p>

                <p> I 'own' count, count Value is: {count} </p>

                <button
                    className='Child-incrementBtn'
                    onClick={incrementCount}
                >
                    Increment Count
                </button>

                <div>
                    <GrandChild />
                    {/* <GreatGrandChild /> */}
                </div>


            </div>

        </CountContext.Provider>

    )
}

export default Child;