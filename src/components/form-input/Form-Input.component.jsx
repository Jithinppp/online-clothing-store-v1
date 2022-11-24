import "./form-input.style.css";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-input_container">
      <input className="form-input" {...otherProps} />
    </div>
  );
};
export default FormInput;
