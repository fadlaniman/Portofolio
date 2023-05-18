const Picture = () => {
  return (
    <div className="px-10 lg:px-20 xl:px-40">
      <div className="bg-gradient-to-tr from-blue-900 to-slate-950 rounded-full max-w-max mx-auto overflow-hidden">
        <img
          className="h-54 pt-3 px-2 mx-auto xl:h-64"
          src="/images/profile.png"
          alt="picture.png"
        />
      </div>
    </div>
  );
};

export default Picture;
