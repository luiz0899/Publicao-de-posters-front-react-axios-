import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to = {'/'}> Blog </Link>
        </h2>
        <ul className="fundo">
            <li>
                <Link to = {'/'}>Home</Link>
            </li>
            <li>
                <Link to = {'/new'} className="newbtn ">New Post</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar