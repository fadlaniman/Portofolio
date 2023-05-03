import { SiFugacloud } from "react-icons/si";
import { BsSun,BsMoon } from "react-icons/bs";
import { useState } from "react";


const Brand = () => {
  return (
    <div className={"flex"}>
      <SiFugacloud className="my-auto text-4xl" />
      <h1 className="my-auto text-2xl xl:text-3xl font-bold font-alkatra">Hasashi</h1>
    </div>
  );
};

const Resume = () => {
  const [darkMode, setDarkMode] = useState(Boolean);
  return (
    <div className="flex gap-3">
      <BsSun className={darkMode?"my-auto text-3xl xl:text-4xl cursor-pointer duration-1000":"hidden"} onClick={() => setDarkMode(!darkMode)}/>
      <BsMoon className={darkMode?"hidden":"my-auto text-2xl xl:text-3xl cursor-pointer duration-1000"} onClick={() => setDarkMode(!darkMode)} />
      <h3 className="xl:text-lg my-auto bg-gradient-to-tr from-blue-900 to-slate-800 text-white py-1 px-5 cursor-pointer rounded-lg">
        Resume
      </h3>
    </div>
  );
};


Brand.Resume = Resume;
export default Brand;
