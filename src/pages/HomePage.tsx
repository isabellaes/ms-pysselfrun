import { images, images2 } from "../img";

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
          Vill du ge bort något fint till en vän eller familjemedlem? Eller
          kanske vill du unna dig något till dig själv? Då har du kommit rätt!
          Jag skapar gåvor med personliga texter och tryck. allt ifrån en mugg
          med ditt namn till en tygkasse med en inspirerande eller peppande
          text! Det finns massor av olika färger och stilar att välja mellan,
          och önskar du något annat så är det bara kontakta mig så hjälper jag
          dig att sätta ihop ett skräddarsytt paket! För tillfället har jag
          ingen online-shop utan det går bra att kontakta mig via
          kontaktformuläret eller på instagram om du är intresserad av att
          beställa något av mig 💗
        </p>
      </div>
      <div className="img-box">
        {images2.flatMap((img) => (
          <img
            srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${img}?w=164&h=164&fit=crop&auto=format`}
            alt={img}
          />
        ))}
      </div>
      <div className="review-box">
        <h3>Recensioner från kunder</h3>
        <div className="row">
          <div className="text">
            <p>
              "Fantastiskt fina tryck! Är så nöjd både med flaskan 😍
              <br></br>
              Kommer absolut beställa igen!"
            </p>
            <p>- Bella</p>
          </div>
          <div className="text">
            <p>
              "Superfina grejer, så nöjd!! Rekommenderar verkligen att
              beställa!"
            </p>
            <p>- Natalie</p>
          </div>
        </div>
      </div>

      <div className="info-box">
        <div>
          <h3>Beställningsinfo</h3>
          <p>
            Kontakta mig via dm på instagram, eller via formuläret nedan om du
            vill beställa något av mig!
          </p>
        </div>
        <div>
          <h3>Kontakt</h3>
          <p>Du når mig lättast via instagram eller mejl!</p>
        </div>
        <div>
          <h3>Om företaget</h3>
          <p>
            Pysselfrun är mitt eget företag som startades 2024. Jag skapar
            personliga gåvor till dig, eller någon du håller kär!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
