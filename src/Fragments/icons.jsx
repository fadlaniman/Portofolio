import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className="flex py-12 px-10 lg:px-20 xl:px-40 gap-5 justify-center text-gray-500">
      <Link to="https://www.instagram.com/fadlaaniman/">
        <BsInstagram className="text-3xl xl:text-4xl"/>
      </Link>
      <Link to="https://github.com/fadlaniman">
        <BsGithub className="text-3xl xl:text-4xl"/>
      </Link>
      <Link to="https://www.linkedin.com/in/fadlan-iman-6198a826b/">
        <BsLinkedin className="text-3xl xl:text-4xl"/>
      </Link>
    </div>
  );
};

export default Icons;
