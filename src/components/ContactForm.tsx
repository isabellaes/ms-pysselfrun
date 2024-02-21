import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const ContactForm = () => {
  return (
    <div className="form-container">
      <div className="social-icons">
        <p>
          <InstagramIcon className="icon" />
        </p>
        <p>
          <FacebookIcon className="icon" />
        </p>
        <p>
          <i className="bx bxl-tiktok icon" />
        </p>
      </div>
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
    </div>
  );
};

export default ContactForm;
