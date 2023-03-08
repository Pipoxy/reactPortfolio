import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t4nrd6n",
        "template_ffbdn4e",
        form.current,
        "YC09Dl_kIU_plgkzA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        e.target.reset()
      );
  };

  return (
    <form className="contact" ref={form} onSubmit={sendEmail}>
      <div className="items">
        <label>Name</label>
        <input className="userInput" type="text" name="name" />
      </div>
      <div className="items">
        <label>Email</label>
        <input className="userInput" type="email" name="email" />
      </div>
      <div className="items">
        <label>Message</label>
        <textarea className="userMessage" name="message" />
      </div>
      <div className="contact">
        <input className="send" type="submit" value="Send" />
      </div>
    </form>
  );
}
