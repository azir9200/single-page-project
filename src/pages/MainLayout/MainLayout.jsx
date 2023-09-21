
import { Link, Outlet } from "react-router-dom";
// import Footer from "../footer/Footer";



const MainLayout = () => {
  return (
    <div>
      <section className="flex justify-between bg-lime-400 px-10 shadow-md py-8 " >
        <div>
          <h1 className="text-xl font-bold" >AMAjhon.</h1>
        </div>
        <nav>
          <ul className="flex gap-5" >
            <Link to="/dashboard" > Dashboard </Link>
            <Link to="/product" >Product</Link>
            <Link to="/home" >Home</Link>
          </ul>
        </nav>
      </section>
      <div className="min-h-screen" >
        <Outlet></Outlet>
      </div>

      {/* <div className="bg-cyan-400" >
        <Footer></Footer>
      </div> */}

    </div>
  );
};

export default MainLayout;