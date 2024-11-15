import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <h1>Implementation</h1>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/data-table"}>Data Table</Link></li>
            </ul>
        </div>
    )
}