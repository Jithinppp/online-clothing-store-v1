import {
  ButtonContainer,
  LoaderSpinnerContainer,
  MainButtonText,
} from "./button.style";

const MainButton = ({ children, isDisabled, isLoading, ...otherProps }) => {
  return (
    <ButtonContainer disabled={isDisabled} {...otherProps}>
      {isLoading === true ? (
        <LoaderSpinnerContainer></LoaderSpinnerContainer>
      ) : (
        <MainButtonText>{children}</MainButtonText>
      )}
    </ButtonContainer>
  );
};
export default MainButton;
