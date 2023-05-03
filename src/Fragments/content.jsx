import * as React from "react";
import Card from "./card";
import Project from "./project";

const Materi = [
  {
    id: 1,
    header: "Service | Offer",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est autem quo
  ducimus in rem similique tempora tempore itaque provident, quia optio,
  odit eum praesentium explicabo laudantium, suscipit saepe eveniet
  doloribus.`,
    footer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    example: <Card/>,
  },

  {
    id: 2,
    header: "Portofolio",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est autem quo
  ducimus in rem similique tempora tempore itaque provident, quia optio,
  odit eum praesentium explicabo laudantium, suscipit saepe eveniet
  doloribus.`,
    footer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    example: <Project/>,
  },
];

const Content = () => {
  return (
    <div>
      {Materi.map((materi) => (
        <div className="py-7 space-y-3">
          <h1 className="font-medium text-xl xl:text-3xl">{materi.header}</h1>
          <h2 className="text-justify xl:text-lg">{materi.description}</h2>
          <p className="text-justify text-gray-500 xl:text-lg pb-7">{materi.footer}</p>
          {materi.example}
        </div>
      ))}
    </div>
  );
};

export default Content;
