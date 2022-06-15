const PageLayout = ({ children }, { sun }) => {
  return (
    <div>
      <div className="page-layout">
        <div className="radient">{sun}</div>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
