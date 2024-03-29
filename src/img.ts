import image1 from "./assets/unnamed1.jpg";
import image2 from "./assets/unnamed2.jpg";
import image3 from "./assets/unnamed3.jpg";
import image4 from "./assets/unnamed4.jpg";
import image6 from "./assets/unnamed6.jpg";
import image7 from "./assets/unnamed7.jpg";
import image8 from "./assets/unnamed8.jpg";
import image9 from "./assets/unnamed9.jpg";
import image11 from "./assets/unnamed11.jpg";
import image12 from "./assets/unnamed12.jpg";
import image13 from "./assets/unnamed13.jpg";
import image14 from "./assets/unnamed14.jpg";
import image15 from "./assets/unnamed15.jpg";
import image16 from "./assets/unnamed16.jpg";

interface Product {
  title: string;
  productImg: string[];
  description: string;
}

const products: Product[] = [
  {
    title: "Mugg",
    productImg: [image15, image16],
    description: "Mugg med personlig text, eller namn.",
  },
  {
    title: "Flaska",
    productImg: [image1, image3],
    description: "Flaska med personlig text, eller namn.",
  },
  {
    title: "Tygkasse",
    productImg: [image8, image12, image9],
    description: "Tygkasse med personlig text, eller namn.",
  },

  {
    title: "Godisask",
    productImg: [image7],
    description: "Godisask med personlig text, eller namn.",
  },
  {
    title: "Bokmärke",
    productImg: [image13],
    description: "Bokmärke med personlig text, eller namn.",
  },
  {
    title: "Dekorationer",
    productImg: [image11],
    description: "Dekorationer med personlig text, eller namn.",
  },
];

const images: string[] = [image1, image2, image6, image13];

const images2: string[] = [image3, image4, image7, image15, image14];

export { images, images2, products };
