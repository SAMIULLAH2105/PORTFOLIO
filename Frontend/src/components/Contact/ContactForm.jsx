import React, { useState } from "react";
import Swal from "sweetalert2";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Email Sent!",
          text: "Thank you for reaching out. I'll get back to you soon.",
          confirmButtonColor: "#3085d6",
          timer: 3000,
          timerProgressBar: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Failed to send email. Please try again.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "An Error Occurred",
        text: "Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className={styles.container} id="ContactForm">
      <h2 className={styles.heading}>Contact Me</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className={styles.textarea}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
