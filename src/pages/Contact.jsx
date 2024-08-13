import React from "react";

function Contact() {
    return(
        <>
        <section className="contact-section">
        <div className="contact-grid">
            <div className="contact-message">
                <h2>Contact Us</h2>
                <p>We would love you to reach out to us if you have any problems or requests, having challenges with booking and reservation ,contact us now</p>
                <div className="socials">
                <i class="bi bi-envelope-fill mx-2 s-25px scale"></i>
                <i class="bi bi-instagram mx-1 s-25px scale"></i>
                <i class="bi bi-twitter-x mx-2 s-25px scale"></i>
                </div>
            </div>
            
        <div className="contact-form shadow-sm">
            
            <form action="" className="row g-3">
            <div className="col-md-6">
                <label htmlFor="" className="form-label">First Name:</label>
                <input className="form-control"type="email" name="" id="" />
            </div> 

            <div className="col-md-6">
                <label htmlFor="" className="form-label">Last Name:</label>
                <input className="form-control" type="email" name="" id="" />
            </div> 

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address:</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>

            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Send us a Message" ></textarea>
            </div>
            <button className="send-button">Send</button>
            </form>
      </div>
      </div>
      </section>
        </>
    );
}

export default Contact;