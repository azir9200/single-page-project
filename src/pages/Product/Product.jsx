import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const Product = () => {
  const userz = useLoaderData()
  console.log(userz);

  return (
    <div>
      <h1 className="text-center  text-4xl text-yellow-700" > Products: {userz.length} </h1>
      <div className=" grid grid-cols-3 gap-5 p-5   " >
        {
          userz.map(user => <ProductCard key={user.id} user={user} ></ProductCard>)
        }

      </div>
    </div>
  );
};

export default Product;