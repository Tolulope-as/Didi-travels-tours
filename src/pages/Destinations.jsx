import React from 'react';
import destinations from '../destinations.json'; 
import { Link } from 'react-router-dom';
import Image1 from '../assets/images/paris.jpg';
import Image2 from '../assets/images/tokyo.png';
import Image3 from '../assets/images/newyork.jpg';
import Image4 from '../assets/images/rome.jpg'
import Image5 from '../assets/images/rwanda.jpg';import Image6 from '../assets/images/capetown.jpg';
import Image7 from '../assets/images/brazil.jpg';
import Image8 from '../assets/images/barcelona.jpg';
import Image9 from '../assets/images/dubai.jpg';


const images = {
    "1": Image1,
    "2": Image2,
    "3": Image3,
    "4": Image4,
    "5": Image5,
    "6": Image6,
    "7": Image7,
    "8": Image8,
    "9": Image9,

}

function Destinations() {
  return (
    <>
    <div className="text-center nunito">
      <h2>Choose your next travel destination </h2>
      <p className=''>We have alot of beautiful countries for you to visit , each unique and alot of adventures and fun activities.</p>
    </div>
    <section className="travel-packages m-5 ">
      <div className="row row-cols-1 row-cols-md-3 g-5 w-900px ">
        {destinations.map((destination) => (
          <div className="col d-flex align-items-stretch" key={destination.id}>
            <div className="card shadow-sm ">
            <img src={images[destination.id]} className="card-img-top" alt={destination.name} />
              <div className="card-body d-flex flex-column nunito">
                <h5 className="card-title">{destination.name}</h5>
                <p className="body-text">{destination.description}</p>
                <p className="body-text">
                  {destination.continent}</p>
                <p className="pricing bold">Price/Person: ${destination.price}</p>
                <a href="#" className="btn btn-dark mt-auto">
                  <Link className="nav-link text-white" to="/bookings" state={{ packageData: destination}}>
                    Visit now
                  </Link>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Destinations;
