import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Oval height="100" width="100" color="green" loading="loading" aria-label="Loading Spinner"
        data="loader" />
    </div>
  );
};

export default Loader;
