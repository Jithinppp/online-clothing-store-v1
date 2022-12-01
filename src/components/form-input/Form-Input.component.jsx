// components
import { FormInputItem } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      <FormInputItem {...otherProps} />
    </div>
  );
};
export default FormInput;
