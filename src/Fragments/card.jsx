import { FcTemplate } from "react-icons/fc";

const Card = () => {
  return (
    <div className="grid xl:grid-cols-3 mx-auto py-5 gap-7">
        <div className="grid mx-auto shadow-lg text-center py-10 px-7 border-2">
          <h2 className="text-8xl mx-auto"><FcTemplate /></h2>
          <h3 className="text-lg font-medium pb-5">Web development</h3>
          <h6 className="text-justify leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto optio nam earum laudantium similique eaque dicta, consectetur, asperiores totam corrupti. Culpa fugit soluta assumenda ipsum ex aspernatur in incidunt.</h6>
          <p className="text-blue-900 py-5">Tools that i use</p>
          <ul className="space-y-3">
            <p>vscode</p>
            <p>mysql</p>
            <p>node js</p>
          </ul>
        </div>
        <div className="grid mx-auto shadow-lg text-center py-10 px-7 border-2">
          <h2 className="text-8xl mx-auto"><FcTemplate /></h2>
          <h3 className="text-lg font-medium pb-5">Web development</h3>
          <h6 className="text-justify leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto optio nam earum laudantium similique eaque dicta, consectetur, asperiores totam corrupti. Culpa fugit soluta assumenda ipsum ex aspernatur in incidunt.</h6>
          <p className="text-blue-900 py-5">Tools that i use</p>
          <ul className="space-y-3">
            <p>vscode</p>
            <p>mysql</p>
            <p>node js</p>
          </ul>
        </div>
        <div className="grid mx-auto shadow-lg text-center py-10 px-7 border-2">
          <h2 className="text-8xl mx-auto"><FcTemplate /></h2>
          <h3 className="text-lg font-medium pb-5">Web development</h3>
          <h6 className="text-justify leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto optio nam earum laudantium similique eaque dicta, consectetur, asperiores totam corrupti. Culpa fugit soluta assumenda ipsum ex aspernatur in incidunt.</h6>
          <p className="text-blue-900 py-5">Tools that i use</p>
          <ul className="space-y-3">
            <p>vscode</p>
            <p>mysql</p>
            <p>node js</p>
          </ul>
        </div>
    </div>
  );
};

export default Card;
