import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";


const Home = () => {
  const products = useLoaderData()
  console.log(products);

  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then(data = console.log(data));
  // }, [])
  return (
    <div>
      {/* {
        products?.map(product => <ProductCard key={product.id} ></ProductCard>)
      } */}
    </div>
  );
};

export default Home;