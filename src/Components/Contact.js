import React from "react";
import "../Styles/contact.css";
import img from "../Images/Screenshot_2022-10-23_123824-removebg-preview.png";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-full">
        <img
          src={img}
          alt="logo"
          className="contact-logo"
        />
      </div>
      <div className="contact-title">Contactează-ne</div>
      <div className="contact-forms">
        {/* <div className="contact-forms-name"> */}
          <form className="contact-forms-name" action="https://formsubmit.co/everestofficialcompany@gmail.com" method="POST">
          <div className="contact-name">
            <div>
              <div>Nume*</div>
              <input type="text" className="contact-input"  required name="Nume"></input>
            </div>
            <div className="contact-lastname">
              <div>Nume de familie*</div>
              <input type="text" className="contact-input" required name="Nume de familie"></input>
            </div>
          </div>
          <div className="contact-email">
            <div>
              <div>Email*</div>
              <input type="text" className="contact-input" required name="Email"></input>
            </div>
          </div>
          <div className="contact-subject">
            <div>
              <div>Subiect*</div>
              <input type="text" className="contact-input" required name="Subject"></input>
            </div>
          </div>
          <div className="contact-textarea">
            <div>
              <div>Descriere*</div>
              <textarea className="contact-text-area" required name="Descriere"></textarea>
            </div>
          </div>
          {/* <button className="contact-button">Trimite</button> */}
          <input className="contact-button" type='submit' value='Trimite'/>
          </form>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Contact;
