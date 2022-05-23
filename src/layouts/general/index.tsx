import modules from "../../modules";

type GeneralProps = {
  children: JSX.Element;
};

function General({ children }: GeneralProps) {
  return (
    <div className="page-container">
      <div className="content-container">
        <modules.Header />
        {children}
        <modules.Footer />
      </div>
    </div>
  );
}

export default General;
