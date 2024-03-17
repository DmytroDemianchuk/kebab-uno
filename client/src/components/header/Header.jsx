import React from "react";
import "./Header.css";

function Header () {
    return (
    <header className="header">
        <nav className="nav container">
            <div className="menu">

                <ul className="list_grid">  

                    <li className="nav_item">

                    <a href="/">Home</a>

                    </li>

                    <li className="nav_item">

                        <a href="/sign_up">Open</a>

                    </li>

                    <li className="nav_item">

                        <a href="/sign_in">Exit</a>
                        
                    </li>

                    <li className="nav_item">

                        <a href="/">Home</a>
                        
                    </li>

                    <li className="nav_item">

                        <a href="/">Home</a>
                        
                    </li>

                </ul>

            </div>
        </nav>
     </header>
    );
}

export default Header;