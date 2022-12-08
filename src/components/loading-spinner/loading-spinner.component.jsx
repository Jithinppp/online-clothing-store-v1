import { LdsRing, LoaderContainer } from "./loading-spinner.style";

const LoadingSpinner = () => {
  return (
    <LoaderContainer>
      <LdsRing className="lds-ring">
        <div></div>
      </LdsRing>
    </LoaderContainer>
  );
};
export default LoadingSpinner;
