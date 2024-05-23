import propTypes from "prop-types";


const Button = ({ type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-orange-600 text-white p-2"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.string.isRequired,
  button_title: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
