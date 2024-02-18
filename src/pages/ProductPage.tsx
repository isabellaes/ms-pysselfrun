import { useState } from "react";
import { images, images2, products } from "../img";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Product {
  title: string;
  productImg: string[];
  description: string;
}

const ProductPage = () => {
  const [product, setProducts] = useState<Product | null>(null);
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
        {product ? (
          <>
            <Stack spacing={2}>
              <img src={product.productImg[page - 1]} alt="" />
              <Pagination
                count={product.productImg.length}
                page={page}
                onChange={handleChange}
                hidePrevButton
                hideNextButton
                variant="outlined"
              />
            </Stack>
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                sit incidunt facere tempora. Voluptates dolorum numquam
                voluptatem dolore. Dicta vero eum possimus, cupiditate
                laboriosam ea rem sapiente a repellat commodi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                sit incidunt facere tempora. Voluptates dolorum numquam
                voluptatem dolore. Dicta vero eum possimus, cupiditate
                laboriosam ea rem sapiente a repellat commodi.
              </p>
            </div>
          </>
        ) : (
          <>
            {/*   {images2.flatMap((img) => (
              <img src={img}></img>
            ))} */}
          </>
        )}
      </main>
    </div>
  );
};

export default ProductPage;
