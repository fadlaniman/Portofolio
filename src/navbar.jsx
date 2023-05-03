import Brand from "./Fragments/brand";

const Navbar = () => {
  return (
    <div className="flex justify-between px-5 py-5 lg:px-20 xl:px-40">
      <Brand />
      <Brand.Resume/>
    </div>
  );
};

export default Navbar;
