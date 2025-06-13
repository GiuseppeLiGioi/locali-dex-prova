import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <div>
            <nav>
            <Link to={"/samybar"}>SamyBar</Link>
            <Link to={"/cafeduport"}>CafeDuPort</Link>
            <Link to={"/crazyhorse"}>CrazyHorse</Link>

            </nav>

        </div>
    )
}