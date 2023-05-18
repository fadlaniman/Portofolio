import * as React from "react";
import Card from "./card";

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
          <img src="/public/images/example.jpg" alt="" />
          <img src="/public/images/example.jpg" alt="" />
          <img src="/public/images/example.jpg" alt="" />
          <img src="/public/images/example.jpg" alt="" />
          <img src="/public/images/example.jpg" alt="" />
          <img src="/public/images/example.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

Content.First = First;
Content.Second = Second;
export default Content;
