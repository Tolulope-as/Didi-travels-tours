import React from "react";
import { Link } from "react-router-dom";
import Image1 from '../assets/images/morocco.jpg';
import Image2 from '../assets/images/tokyo.jpg';
import Image3 from '../assets/images/london.jpg';
import Image4 from '../assets/images/bali indonesia.jpg';
import Image5 from'../assets/images/maldives.jpg';
import Image6 from '../assets/images/lagos.jpg';
import Client1 from '../assets/images/image-emily.jpg';
import Client2 from '../assets/images/image-thomas.jpg';
import Client3 from '../assets/images/image-jennie.jpg';

function Home() {
    return(
        <>
           <section className="home ">
            <div className="home-innerdiv">
                <div className="welcome-box">
            <h1 className="text-white nunito f-45px">Your Journey of Exploration Begins Here!</h1>
            <p className="nunito txt-white">
                Welcome to Didi Travels and tours where we help you discover interesting travel destinations, while still managing your journey for you leaving you stress-free. journey of Exploration.
                
            </p>
            </div>
            <div className="search-box shadow-sm">
                <div className="search-items">
                    <p>Location</p>
                    <input type="text" />
                </div>
                <div className="search-items">
                    <p>No. of Persons</p>
                    <input type="number" />
                </div>
                <div className="search-items">
                    <p>Price</p>
                    <input type="number" />
                </div>
              <button className="search-button">
                <i className="bi bi-search search-icon" >
                </i>
                </button>
            </div>
            </div>
           </section>

           <section className="services-section text-center barlow">
            <h2>Our Professional Services</h2>
            <p>Didi Travels and Tours offers a wide range of services, which include:</p>
            <div className="container-fluid">
                <div className="row ">
                <div className="col-12 col-md-4">
                <i className="bi bi-airplane-fill services-icon"></i>
                    <p className="text-center fw-bold">Flight Booking/Reservations</p>
                    <p className="text-center">Find the cheapest flight tickets.Book with ease we have partnered with 50+ airlines in order to provide you with the best affordable rates.</p>
                </div>
               
                <div className="col-12 col-md-4">
                    <i className="bi bi-house-check-fill services-icon"></i>
                    <p className="text-center fw-bold">Hotel Reservation</p>
                    <p className="text-center">
                    We have created an online platform that allows you to manage bookings all in one place and enables to secure hotel accomodation.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                <i className="bi bi-people-fill services-icon"></i>
                    <p className="text-center fw-bold">Tour Guides</p>
                    <p className="text-center">Our tourist guides, are members of the hospitality and travel industry who will show you around places of interest.</p>
                </div>
                </div>
            </div>
            </section>
           
    <section className="travel-packages">
       <h2 className="m-3 fs-3 text-decoration-underline">Our Best Travel Packages</h2>
        <div className="row row-cols-1
        row-cols-md-3 g-5 w-800px">
    <div className="col d-flex align-items-stretch">
        <div className="card shadow-sm ">
        <img src={Image1} className="card-img-top " alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Morocco</h5>
        <p className="body-text">Visit the beautiful city of Marrakech full with festive and cultural places.</p>
        <a href="" className="more"><Link className="nav-link" to="/destinations">View more</Link></a>
      </div>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="card shadow-sm ">
      <img src={Image2} className="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Tokyo</h5>
        <p className="body-text">One of Asia's popular cities to visit with amazing modern architecture. </p>
        <a href="" className="more"><Link className="nav-link" to="/destinations">View more</Link></a>
      </div>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="card shadow-sm ">
      <img src={Image3} className="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">London</h5>
        <p className="body-text">The city of London holds exciting locations to visit.</p>
        <a href="" className="more"><Link className="nav-link" to="/destinations">View more</Link></a>
      </div>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="card shadow-sm ">
      <img src={Image4} className="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Indonesia</h5>
        <p className="body-text">Explore and experience the rich culture of indonesia.</p>
        <a href="" className="more"><Link className="nav-link" to="/destinations">View more</Link></a>
      </div>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="card shadow-sm ">
      <img src={Image5} className="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Maldives</h5>
        <p className="body-text">The maldives has relaxing beaches and lakes for you.</p>
        <a href="" className="more"><Link className="nav-link" to="/destinations">View more</Link></a>
      </div>
    </div>
  </div>
  <div className="col d-flex align-items-stretch">
    <div className="card shadow-sm ">
      <img src={Image6} className="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Lagos</h5>
        <p className="body-text">This is the commercial marketplace of Nigeria.</p>
        <a href="" className="more"><Link className="nav-link" to="/destinations">View more</Link></a>
      </div>
    </div>
  </div>
</div>
           </section>

           
                {/* Testimonials Section */}
     <section className="testimonial-section">
     <h4 className="testimonial-heading">CLIENT TESTIMONIALS</h4> 
     <div className="testimonial-grid">
   <div className="testimonial1">
      <img className="client-img" src={Client1} alt=""/>
          <p className="client-testimony">
        We put our trust in Diditravels and they delivered, making sure our needs were met, right from hotelbookings , airport-pickup everything was done perfectly with no issues.
       </p>
       <p className="client">Emily R.</p>
       <p className="client-position">Marketing Director</p>
     </div>
  <div className="testimonial2">
    <img className="client-img" src={Client2} alt=""/>
        <p className="client-testimony">
          Diditravels&tours enthusiasm coupled with their keen interest in us and there friendly staff all made our vacation a satisfying and enjoyable experience.
      </p>
      <p className="client">Thomas S.</p>
      <p className="client-position">Chief Operating Officer</p>
    </div>
  <div className="testimonial3">
    <img className="client-img" src={Client3} alt=""/>
    <p className="client-testimony">
      Incredible Travel adventure to Rwanda! Our Kids were super excited and we got to meet new people, isit the national conservation parks and try new food. Highly recommended!
  </p>
  <p className="client"> Jennie F.</p>
  <p className="client-position">Business Owner</p>
</div>
  </div>
  </section>
        </>
    );
}

export default Home;