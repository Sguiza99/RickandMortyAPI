import React from "react";
import "./navbarhome.css"
import logo from "../../Assets/Logo Home.png"
export const Navbar = () =>
{
    return (
        <nav className="barra">
            <img src={logo}></img>
            <ul>
                <li>   <a href="/">Personajes</a> </li>
                <li>   <a href="/">Episodios</a> </li>
                <li>   <a href="/">Autogenerador</a> </li>
           </ul>
        </nav>
    )
}
