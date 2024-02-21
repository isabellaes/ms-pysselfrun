const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <label htmlFor="fname">Namn</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label htmlFor="lname">Email</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label htmlFor="subject">Meddelande</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
