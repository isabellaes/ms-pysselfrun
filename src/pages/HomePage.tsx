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
        <div className="text">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            similique repellat maxime minima aliquam? Praesentium fugit,
            voluptatum rerum illo, architecto recusandae quis doloremque eius
            minima quibusdam ex iure earum ipsam?"
          </p>
          <p>- Anna</p>
        </div>
        <div className="text">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            aliquid accusamus repellat? Excepturi asperiores accusantium in
            quibusdam esse est modi, nihil ut, incidunt delectus magnam! Modi
            dolorem eveniet laborum nemo?"
          </p>
          <p>- Emma</p>
        </div>
      </div>

      <div className="info-box">
        <div>
          <h3>Beställningsinfo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            beatae sit natus nesciunt voluptate quibusdam, inventore suscipit
            ipsum, esse corrupti est animi expedita doloremque, reiciendis earum
            libero aliquid. Explicabo, similique!
          </p>
        </div>
        <div>
          <h3>Kontakt</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus rerum culpa provident accusantium saepe harum maiores
            amet quasi, veniam necessitatibus nisi perferendis, modi quas
            tenetur enim expedita deleniti explicabo facere.
          </p>
        </div>
        <div>
          <h3>Om företaget</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            eveniet enim omnis accusantium ea nobis nihil, quidem veritatis at
            quibusdam fugit dolor facere adipisci, error perspiciatis itaque
            distinctio voluptas magnam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
