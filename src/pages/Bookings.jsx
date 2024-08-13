import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Bookings() {
  const location = useLocation();
  const { packageData } = location.state || {};

  // State for form fields
  const [locationValue, setLocationValue] = useState(packageData?.name || '');
  const [priceValue, setPriceValue] = useState(packageData?.price || '');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [noOfPersons, setNoOfPersons] = useState('1');
  const [hotel, setHotel] = useState('');
  const [airways, setAirways] = useState('');
  const [contact, setContact] = useState('');

  // State for storing submissions and whether to show summary
  const [submissions, setSubmissions] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  // State to keep track of the booking being edited
  const [editIndex, setEditIndex] = useState(null);

  // Load saved submissions from local storage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('bookingData');
    if (savedData) {
      setSubmissions(JSON.parse(savedData));
      setShowSummary(true);
    }
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingData = {
      location: locationValue,
      price: priceValue,
      startDate,
      endDate,
      noOfPersons,
      hotel,
      airways,
      contact,
    };

    let updatedSubmissions;

    if (editIndex !== null) {
      // Update the existing booking
      updatedSubmissions = submissions.map((item, index) =>
        index === editIndex ? bookingData : item
      );
      setEditIndex(null); // Reset editIndex after saving
    } else {
      // Add a new booking
      updatedSubmissions = [...submissions, bookingData];
    }

    setSubmissions(updatedSubmissions);

    // Save to local storage
    localStorage.setItem('bookingData', JSON.stringify(updatedSubmissions));

    // Show confirmation message
    window.alert('Your booking has been successfully saved!');

    // Clear the form fields
    setLocationValue('');
    setPriceValue('');
    setStartDate('');
    setEndDate('');
    setNoOfPersons('1');
    setHotel('');
    setAirways('');
    setContact('');

    // Show summary
    setShowSummary(true);
  };

  // Handle the edit button click
  const handleEdit = (index) => {
    const booking = submissions[index];
    setLocationValue(booking.location);
    setPriceValue(booking.price);
    setStartDate(booking.startDate);
    setEndDate(booking.endDate);
    setNoOfPersons(booking.noOfPersons);
    setHotel(booking.hotel);
    setAirways(booking.airways);
    setContact(booking.contact);

    setEditIndex(index); // Set the index of the booking being edited
  };

  // Delete Booking
  const handleDelete = (index) => {
    const updatedSubmissions = submissions.filter((_, i) => i !== index);
    setSubmissions(updatedSubmissions);
    localStorage.setItem('bookingData', JSON.stringify(updatedSubmissions));
  };

  return (
    <>
      <h2 className='text-center m-4'> Manage your Bookings</h2>
      <section className="center p-5" id='booking-form'>
        <form onSubmit={handleSubmit} className="row g-3 w-800px barlow ">
          <div className="col-md-6">
            <label htmlFor="location" className="form-label">Location:</label>
            <input
              type="text"
              id="location"
              value={locationValue}
              onChange={(e) => setLocationValue(e.target.value)}
              className="form-control outline"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="price" className="form-label">Price:</label>
            <input
              type="text"
              id="price"
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
              className="form-control outline"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="start-date" className="form-label">Start Date:</label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-control outline"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="end-date" className="form-label">End Date:</label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-control outline"
            />
          </div>
          <div className="col-12">
            <label htmlFor="noofpersons" className="form-label">No. Of Persons:</label>
            <input
              type="number"
              id="noofpersons"
              value={noOfPersons}
              onChange={(e) => setNoOfPersons(e.target.value)}
              className="form-control outline"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="hotel" className="form-label">Hotel:</label>
            <input
              type="text"
              id="hotel"
              value={hotel}
              onChange={(e) => setHotel(e.target.value)}
              className="form-control outline"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="airways" className="form-label">Available Flights:</label>
            <input
              type="text"
              id="airways"
              value={airways}
              onChange={(e) => setAirways(e.target.value)}
              className="form-control outline"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="contact" className="form-label">Contact (Phone):</label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="form-control outline"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              {editIndex !== null ? 'Update Booking' : 'Submit'}
            </button>
          </div>
        </form>
      </section>

      {/* Display summaries */}
      {showSummary && (
        <div className="booking-section shadow-sm barlow">
          <h2 className='text-center'>Booking Summaries</h2>
          <div className="heading">
            <p className="">LOCATION</p>
            <p className="">$PRICE</p>
            <p className="">STARTDATE</p>
            <p className="">ENDDATE</p>
            <p className="">PERSONS</p>
            <p className="">HOTEL</p>
            <p className="">FLIGHT</p>
            <p className="">CONTACT</p>

          </div>
          {submissions.map((data, index) => (
            <div key={index} className="booking-summary barlow">
              <p> {data.location}</p>
              <p>{data.price}</p>
              <p>{data.startDate}</p>
              <p>{data.endDate}</p>
              <p>{data.noOfPersons}</p>
              <p>{data.hotel}</p>
              <p>{data.airways}</p>
              <p>{data.contact}</p>
              <div className="function-buttons">
              <button className='btn btn-outline-info me-2' onClick={() => handleEdit(index)}>Edit</button>
              <button className='btn btn-outline-danger' onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Bookings;
