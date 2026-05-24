import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Index from "./Pages/Index";
import About from "./Pages/About";
import AppState from './Context/AppState';
import UserContext from './Context/UserContext';
import { useState } from 'react';


function AppRouter() {

    const [user, setUser] = useState(null)
    return (
        <div>
            <h1> This is a Router Component! </h1>

            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/"> Home </Link>
                            </li>

                            <li>
                                <Link to="/about"> About </Link>
                            </li>
                        </ul>
                    </nav>

                    <UserContext.Provider value={{ user, setUser }}>

                        <AppState>

                            <Routes>
                                <Route path="/" element={<Index />} />
                                <Route path="/about" element={<About />} />
                            </Routes>

                        </AppState>

                    </UserContext.Provider>

                </div>
            </Router>
        </div>
    )
}

export default AppRouter;