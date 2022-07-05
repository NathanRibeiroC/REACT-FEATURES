import React from "react";
// Stylesheet
import "../style.css";
// Images
import PhoneIcon from "../images/phone-icon.svg";
import EmailIcon from "../images/email-icon.svg";

export default function Contact(props) {
  return (
    <section className="contact--section">
      <img className="contact--image" src={props.img} />
      <h1 className="contact--name">{props.name}</h1>
      <section className="contact--phone">
        <img src={PhoneIcon} />
        <h1>{props.phone}</h1>
      </section>
      <section className="contact--email">
        <img src={EmailIcon} />
        <h1>{props.email}</h1>
      </section>
    </section>
  );
}
