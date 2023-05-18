import { SiFugacloud } from "react-icons/si";
import { BsSun, BsMoon } from "react-icons/bs";
import { createGlobalState } from "react-hooks-global-state";

export const { useGlobalState, setGlobalState } = createGlobalState({
  darkMode: false,
});

const Brand = () => {
  return (
    <div className="flex space-x-1">
      <SiFugacloud className="my-auto text-3xl" />
      <h1 className="my-auto text-2xl font-bold font-alkatra">Hasashi</h1>
    </div>
  );
};

const Resume = () => {
  const [darkMode] = useGlobalState("darkMode");
  return (
    <div className="flex space-x-2">
      <BsMoon
        onClick={() => {
          setGlobalState("darkMode", true);
        }}
        className={
          darkMode ? "hidden" : "my-auto text-xl cursor-pointer duration-1000"
        }
      />

      <BsSun
        onClick={() => {
          setGlobalState("darkMode", false);
        }}
        className={
          darkMode
            ? "my-auto text-2xl cursor-pointer duration-1000"
            : "hidden"
        }
      />
      <h3 className="my-auto bg-gradient-to-tr from-blue-900 to-slate-950 text-white py-1 px-5 cursor-pointer rounded-lg">
        Resume
      </h3>
    </div>
  );
};

Brand.Resume = Resume;
export default Brand;
