import './Header.css'
function Header({ text, color }) {
    return (

        <>
            <h2 className="Header"> Welcome to my Application!! 👋 </h2>
            <h3 style={{ color: color }} className="Header"> {text} 👋 </h3>
        </>
    )
}

export default Header;