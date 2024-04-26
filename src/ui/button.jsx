
import PropTypes from "prop-types"; // Import PropTypes

const Button = ({ name }) => {
  return (
    <button className="bg-gradient-to-b from-[#06286e] to-[#164ec0] text-white flex px-10 py-3 rounded-full capitalize">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired, // Define 'name' prop as a required string
};

export default Button;
