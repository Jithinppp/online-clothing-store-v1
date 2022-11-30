import "./util.style.css";

export const ButtonPrimary = ({ content, type, onClick }) => {
  return (
    <button className="primary_button" type={type} onClick={onClick}>
      {content}
    </button>
  );
};

export const ButtonSecondary = ({ content, onClick }) => {
  return (
    <button className="secondary_button" onClick={onClick}>
      {content}
    </button>
  );
};
