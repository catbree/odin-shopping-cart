import PropTypes from "prop-types";

export default function Title({ children }) {
  return <h1 className="title">{children}</h1>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
