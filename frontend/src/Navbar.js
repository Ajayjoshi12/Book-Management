import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {


    return (
        <>
            <header style={{ backgroundColor: "#343a40" }}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        {/* <a class="navbar-brand ml-5" href="#">Welcome to Book Management</a> */}
                        <Link to="/" className="navbar-brand nb">Welcome to Book Management</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/admin">Admin Book</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/user">User Book</Link>
                                </li>

                            </ul>

                        </div>
                    </nav>
                </div>

            </header>
        </>
    )
}