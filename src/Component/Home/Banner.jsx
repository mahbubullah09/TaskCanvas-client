import { Link } from "react-router-dom";
import banner from "../../assets/Banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full mx-auto" src={banner} alt="" />
        <div className="absolute h-full  items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] flex transform -translate-y-1/2  top-1/2 ">
          <div className="space-y-7 w-full md:w-2/5 text-white mx-10 md:ml-20   ">
            <h2 className="text-2xl md:text-4xl lg:text-6xl ">
            Canvas Your Dreams, Achieve Your Tasks.
            </h2>
            

            <div className="flex gap-2 ">


              <Link to={'dash'}>
              <button className="border rounded hover:bg-[#FF3811] hover:border-[#FF3811] border-white py-1 md:py-2 px-2 md:px-4 text-white">
                {" "}
                Let’s Explore
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
