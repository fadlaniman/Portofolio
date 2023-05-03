import { FcTemplate } from "react-icons/fc";

const Material = [
  {
    id: 1,
    icon: <FcTemplate />,
    header: "Custom Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    aliquam voluptatem`,
    tools: "Tools that I Use",
    tols_1: "React",
    tols_2: "Vite",
    tols_3: "Tailwind",
    },
  
  {
    id: 2,
    icon: <FcTemplate />,
    header: "Custom Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    aliquam voluptatem`,
    tools: "Tools that I Use",
    tols_1: "React",
    tols_2: "Vite",
    tols_3: "Tailwind",
    },
  
  {
    id: 3,
    icon: <FcTemplate />,
    header: "Custom Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    aliquam voluptatem`,
    tools: "Tools that I Use",
    tols_1: "React",
    tols_2: "Vite",
    tols_3: "Tailwind",
  },
];

const Card = () => {
  return (
    <div className="mx-auto xl:flex xl:flex-row py-5 gap-7">
      {Material.map((materi) => (
        <div className="grid mx-auto xl:basis-1/3 shadow-lg text-center p-10 space-y-5">
          <h2 className="text-8xl mx-auto">{materi.icon}</h2>
          <h3 className="text-lg font-medium">{materi.header}</h3>
          <h6 className="text-center">{materi.description}</h6>
          <p className="text-blue-900">{materi.tools}</p>
          <ul className="space-y-2">
            <p>{materi.tols_1}</p>
            <p>{materi.tols_2}</p>
            <p>{materi.tols_3}</p>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Card;
