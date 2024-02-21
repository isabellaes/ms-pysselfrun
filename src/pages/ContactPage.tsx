import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <div className="contact">
        <div className="social-icons">
          <h1>Kontakta mig</h1>
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
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default ContactPage;
