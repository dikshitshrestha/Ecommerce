import React from "react";
import bg from "../../assets/background.jpg";
import photo1 from "../../assets/homebg.jpg";
import photo2 from "../../assets/Sweater.jpg";
import AboutSlider from "./BlogSlider";
import AboutFooter from "./BlogFooter";

export default function Blog() {
  return (
    <div>
      <div className="lg:h-[400px] h-[200px] relative flex flex-col items-center">
        <img src={bg} alt={bg} className="h-full w-full object-cover" />
        <div className="absolute top-[40%] text-white">
          <h1 className="text-center text-3xl font-semibold">Blog</h1>
          <div className="flex gap-2 justify-center text-xs mt-5">
            <a href="/" className="hover:text-orange-600">
              Home
            </a>
            <p>-</p>
            <p>Blog About Us</p>
          </div>
        </div>
      </div>
      <div className="lg:py-20 py-10">
        <div className="text-center">
          <h1 className="text-zinc-600">Learn more about our Design!</h1>
          <div className="lg:text-4xl text-2xl font-bold text-zinc-800 flex flex-col gap-4 py-5">
            <h1>
              Our Mission? We Bring Harmony And Practicality Into Great Designs
              For Everyone
            </h1>
          </div>
        </div>
        <div className="lg:py-16 py-2 px-6">
          <div className="flex md:flex-row md:justify-center flex-col lg:h-[500px] gap-5">
            <div className="overflow-hidden lg:h-full h-48 lg:w-2/3 rounded-md">
              <img
                src={photo1}
                alt="photo1"
                className="object-cover object-left hover:scale-105 duration-500 h-full w-full"
              />
            </div>
            <div className="overflow-hidden lg:h-full h-48 lg:w-1/3 rounded-md">
              <img
                src={photo2}
                alt="photo2"
                className="object-cover hover:scale-105 duration-500 h-full w-full"
              />
            </div>
          </div>
          <div className="text-[15px] text-justify py-10 flex flex-col gap-6 text-zinc-600">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              neque quibusdam voluptas accusamus laboriosam cupiditate amet
              veritatis, quasi alias velit assumenda consectetur culpa at
              architecto doloremque veniam quisquam quam ducimus.
            </h1>

            <h1>
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque
              id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit
              eros maximus ut. Integer non tincidunt justo, rhoncus Aenean
              venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo
              et luctus rutrum, lobortis sed mauris. Integer congue, sem
              elementum varius tristique, erat nulla rutrum risus, a imperdiet
              nulla lorem fermentum erat. Pellentesque elementum justo at velit
              fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta
              eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien,
              eget faucibus sapien. Proin hendrerit lacus turpis.
            </h1>
            <h1>
              Maecenas congue metus id turpis iaculis mattis. Sed pellentesque
              id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit
              eros maximus ut. Integer non tincidunt justo, rhoncus Aenean
              venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo
              et luctus rutrum, lobortis sed mauris.
            </h1>
          </div>
        </div>
        <AboutSlider />
      </div>
      <AboutFooter />
    </div>
  );
}
