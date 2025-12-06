import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert("Message sent successfully!"),
        (error) => {
          console.error("EmailJS error:", error);
          alert("Something went wrong. Check console for details.");
        }
      );
  };

  return (
    <section id="contact" className="contact-wrap" >
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-sub">Let’s bring your vision to life.</p>

      <div className="contact-grid">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Contact Details</h3>

          <div className="info-box">
            <p><strong>Phone:</strong></p>
            <p>+27 82 570 6915</p>
          </div>

          <div className="info-box">
            <p><strong>Email:</strong></p>
            <p>godiousproductions@gmail.com</p>
          </div>

          <div className="info-box">
            <p><strong>Location:</strong></p>
            <p>Pretoria</p>
          </div>

          <div className="info-box">
            <p><strong>Hours:</strong></p>
            <p>Mon – Sun : 8:00 – 23:00</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="+27 65 123 4567" />
          </div>

          <div className="form-group">
            <label>Project Type</label>
            <select name="projectType" required>
              <option value="">Select a type</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Creative Enhancements">Creative Enhancements</option>
              <option value="Post-Production">Post-Production</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>

          <button className="contact-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
