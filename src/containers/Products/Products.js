import { useEffect, useState } from "react";
import { http } from "../../service/api";
import { Card } from "./Card";
import { Header } from "../../components/Header";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    http.get("/products").then(({ data }) => setProducts(data.products));
  }, []);

  return (
    <div>
      <Header>Products</Header>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
