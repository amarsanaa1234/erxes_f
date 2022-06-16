const PageLayout = ({ children }) => {
  return (
    <div>
      <div className="page-layout">
        <div className="radient"></div>
        <div className="scroll_down d-flex flex-column align-items-center position-absolute text-gray">
          <div>Scroll down</div>
          <div className="scroll_icon"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
