const Section = (props) => {
  const { children } = props;
  return <div className="grid px-8 py-14 lg:px-20 xl:px-40">{children}</div>;
};

export default Section;
