import React from "react";

import "./Contact.css";

const Contact = () => {
  const contact = [
    {
      name: "email",
      path: "/assets/contact/email.png",
      url: "mailto:ejhuang84@gmail.com"
    },
    {
      name: "github",
      path: "/assets/contact/github.png",
      url: "https://github.com/HiEricHere"
    },
    {
      name: "linkedin",
      path: "/assets/contact/linkedin.png",
      url: "https://www.linkedin.com/in/ericjhuang/"
    }
  ];

  return (
    <section id="container-contacts">
      <h1>Contact</h1>
      <ul id="contacts-list">
        {contact.map(link => {
          return (
            <li key={link.name}>
              <a href={link.url}>
                <img src={link.path} alt={link.name} />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Contact;
