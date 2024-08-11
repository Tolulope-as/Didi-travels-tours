import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Footer() {
    return(
       <footer className="footer container-fluid p-4 text-center bg-dark">
        <div className="row">
        <div className="col-lg-3 col-md-6 p-4">
            <p className="footer-headings text-white">Socials</p>
            <p className="text-white-50">Diditravels and tours is here for you so why stress.</p>
            <div className="socials">
                <i class="bi bi-envelope-fill mx-2 s-25px footer-icon"></i>
                <i class="bi bi-instagram mx-1 s-25px footer-icon "></i>
                <i class="bi bi-twitter-x mx-2 s-25px footer-icon"></i>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 p-4">
            <p className="footer-headings text-white">Quick Link</p>
            <p className="text-white-50">Home</p>
            <p className="text-white-50">Destinations</p>
            <p className="text-white-50">Bookings</p>
            <p className="text-white-50">Contact</p>
        </div>
        <div className="col-lg-3 col-md-6 p-4">
            <p className="footer-headings text-white">Company</p>
            <p className="text-white-50">FAQ'S</p>
            <p className="text-white-50">Privacy Policy</p>
            <p className="text-white-50">Terms & Conditions</p>
            <p className="text-white-50">Support</p>
        </div>
        <div className="col-lg-3 col-md-6 p-4">
        <p className="footer-headings text-white">
            Contact
        </p>
           <p className="text-white-50">1st Abidjan Street Lugbe,Abuja.</p>
           <p className="text-white-50">+234 567 890</p>
           <p className="text-white-50">diditravel&tours@gmail.com</p>

        </div>
        </div>
        <hr className="white-rule" />
        <p className="text-white-50">@DidiTravels&Tours,All rights reserved.</p>
       </footer>
    );
}

export default Footer;