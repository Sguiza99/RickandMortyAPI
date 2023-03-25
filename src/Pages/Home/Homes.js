import "./Home.css"
import Greenportal from "../../Assets/Green portal.png"
export const Home = () =>
{
    return (
        <div className="Logo">
            <div className="text">
            <h2>Bienvenido a la 
            API de Rick y Morty</h2>
            </div>
            <img className="greenportal" src={Greenportal}></img>
        </div>
    )
}