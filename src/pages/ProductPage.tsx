import { useState } from "react";
import { products } from "../img";
import SlideShowImg from "../components/SlideShowImg";

interface Product {
  title: string;
  productImg: string[];
  description: string;
}

const ProductPage = () => {
  const [product, setProducts] = useState<Product>(products[0]);

  function onClick(title: string) {
    const product = products.find((product) => product.title === title);
    if (product) {
      setProducts(product);
    }
  }
  return (
    <div className="productpage-container">
      <aside>
        <h2>Personligt</h2>
        <p onClick={() => onClick("Mugg")}>Mugg</p>
        <p onClick={() => onClick("Flaska")}>Flaska</p>
        <p onClick={() => onClick("Tygkasse")}>Tygkasse</p>
        <p onClick={() => onClick("Dekorationer")}>Dekorationer</p>
        <p onClick={() => onClick("Godisask")}>Godisask</p>
        <p onClick={() => onClick("Bokmärke")}>Bokmärke</p>
        <p></p>
        <h2>Gåvoset</h2>
        <p>Alla hjärtans dag</p>
        <p>Morsdag</p>
        <p>Farsdag</p>
      </aside>
      <main>
        <>
          <SlideShowImg
            currentImg={product.productImg[0]}
            images={product.productImg}
          ></SlideShowImg>
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sit
              incidunt facere tempora. Voluptates dolorum numquam voluptatem
              dolore. Dicta vero eum possimus, cupiditate laboriosam ea rem
              sapiente a repellat commodi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sit
              incidunt facere tempora. Voluptates dolorum numquam voluptatem
              dolore. Dicta vero eum possimus, cupiditate laboriosam ea rem
              sapiente a repellat commodi.
            </p>
          </div>
        </>
      </main>
    </div>
  );
};

export default ProductPage;
