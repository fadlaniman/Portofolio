import * as React from "react";
import Card from "./card";
import { Link } from "react-router-dom";

const Content = () => {};

const First = () => {
  return (
    <>
      <div className="py-7 space-y-3">
        <h1 className="font-medium text-xl">Service | Offer</h1>
        <h2 className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
          maiores. Magni aliquid laboriosam dicta. Consequuntur cumque
          consequatur id beatae, nemo, magnam architecto repudiandae ea,
          exercitationem molestiae dolores maiores quod quas!
        </h2>
        <p className="text-justify text-gray-500 pb-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <Card />
      </div>
    </>
  );
};

const Second = () => {
  return (
    <>
      <div className="py-7 space-y-3">
        <h1 className="font-medium text-xl">Portofolio</h1>
        <h2 className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
          maiores. Magni aliquid laboriosam dicta. Consequuntur cumque
          consequatur id beatae, nemo, magnam architecto repudiandae ea,
          exercitationem molestiae dolores maiores quod quas!
        </h2>
        <p className="text-justify text-gray-500 pb-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-3">
          <div className="grid space-y-5">
            <h3 className="text-sm font-bold text-blue-900">
              Sistem Informasi Sekolah berbasis Website
            </h3>
            <img
              className="shadow-md shadow-gray-700"
              src="/static/images/project-1(destkop).png"
              alt=""
            />
            <Link
              className=" text-white w-max mx-auto py-1 px-3 italic text-sm rounded-sm bg-blue-900"
              to="https://web-aplikasi-sekolah-6gb2s0n29-fadlaniman.vercel.app/"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Content.First = First;
Content.Second = Second;
export default Content;
