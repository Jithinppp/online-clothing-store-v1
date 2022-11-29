import "./util.style.css";

export const ButtonPrimary = ({ content, type }) => {
  return (
    <button className="primary_button" type={type}>
      {content}
    </button>
  );
};

export const ButtonSecondary = ({ content }) => {
  return <button className="secondary_button">{content}</button>;
};
