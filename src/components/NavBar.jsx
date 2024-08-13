import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function NavBar() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
        <a className="navbar-brand ms-3" href="#">DidiTravels</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarTogglerDemo02">
            <ul className="navbar-nav mb-2 mb-md-0 ">
                <li className="nav-item mx-3"><Link className="nav-link" to="/">Home</Link></li>

                <li className="nav-item mx-3"><Link className="nav-link" to="/destinations">Destinations</Link></li>

                <li className="nav-item mx-3"><Link className="nav-link" to="/bookings">Bookings</Link></li>
                <li className="nav-item mx-3 me-5 contact-button"><Link className="nav-link text-light " to="/contact">Contact</Link></li>

            </ul>
            </div>
            </div>
        </nav>

        
    );
}

export default NavBar;