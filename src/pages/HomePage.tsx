import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { images, images2 } from "../img";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="img-grid">
        {images.flatMap((img) => (
          <img
            srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${img}?w=164&h=164&fit=crop&auto=format`}
            alt={img}
          />
        ))}
      </div>
      <div className="text-box">
        <h1>Personliga gåvor, skapade med omsorg</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          similique illum eligendi numquam quos error, magnam debitis sequi
          velit, inventore quas vitae minima neque qui laboriosam aspernatur
          quae voluptas esse. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Amet in accusantium ut error voluptas quia eaque
          sint adipisci dolorum consequatur. Harum sunt eum soluta natus
          possimus impedit beatae aspernatur dicta. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Placeat expedita non at vero dolores.
          Repellat labore nemo unde impedit neque veritatis optio necessitatibus
          asperiores, nesciunt nobis illum sunt saepe dolores? Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Quibusdam similique
          illum eligendi numquam quos error, magnam debitis sequi velit,
          inventore quas vitae minima neque qui laboriosam aspernatur quae
          voluptas esse. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Amet in accusantium ut error voluptas quia eaque sint adipisci
          dolorum consequatur. Harum sunt eum soluta natus possimus impedit
          beatae aspernatur dicta. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Placeat expedita non at vero dolores. Repellat
          labore nemo unde impedit neque veritatis optio necessitatibus
          asperiores, nesciunt nobis illum sunt saepe dolores?
        </p>
        <div className="img">
          {images2.flatMap((img) => (
            <img
              srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${img}?w=164&h=164&fit=crop&auto=format`}
              alt={img}
            />
          ))}
        </div>
      </div>

      <div className="contact">
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
          <h1>Kontakta mig</h1>
          <form>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
